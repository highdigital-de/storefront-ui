<template>
  <div class="sf-header" :class="{ 'is-sticky': sticky, 'is-hidden': hidden }">
    <div class="sf-header__wrapper">
      <header ref="header" class="sf-header__header">
        <!--@slot Use this slot to replace logo with text or image-->
        <slot name="logo" v-bind="{ logo, title }">
          <SfLink link="/">
            <SfImage
              v-if="logo"
              :src="logo"
              :alt="title"
              class="sf-header__logo"
            />
            <h1 v-else class="sf-header__title">{{ title }}</h1>
          </SfLink>
        </slot>
        <div class="sf-header__aside">
          <!-- @slot Use this slot for language or currency selector -->
          <slot name="aside" />
        </div>
        <div class="sf-header__actions">
          <nav
            class="sf-header__navigation"
            :class="{ 'is-visible': isNavVisible }"
          >
            <slot name="navigation"></slot>
          </nav>

          <slot
            name="header-icons"
            v-bind="{
              activeIcon,
              cartHasProducts,
              cartItemsQty,
              cartIcon,
              wishlistIcon,
              accountIcon,
            }"
          >
            <div class="sf-header__icons">
              <SfButton
                v-if="accountIcon"
                class="sf-button--pure sf-header__action"
                data-testid="accountIcon"
                @click="$emit('click:account')"
              >
                <slot>{{ "Anmelden" }}</slot>
              </SfButton>
            </div>
          </slot>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfHeaderNavigationItem from "./_internal/SfHeaderNavigationItem.vue";
import SfHeaderNavigation from "./_internal/SfHeaderNavigation.vue";
Vue.component("SfHeaderNavigation", SfHeaderNavigation);
Vue.component("SfHeaderNavigationItem", SfHeaderNavigationItem);
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
import { isClient } from "../../../utilities/helpers";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfHeader",
  components: {
    SfImage,
    SfButton,
    SfLink,
  },
  props: {
    /**
     * Header logo
     */
    logo: {
      type: [String, Object],
      default: "",
    },
    /**
     * Header title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean, Array],
      default: "empty_cart",
    },
    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: "heart",
    },
    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean, Array],
      default: "profile",
    },
    /**
     * Header activeIcon (accepts account, wishlist and cart)
     */
    activeIcon: {
      type: String,
      default: "",
      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      },
    },
    /**
     * Header search placeholder
     */
    searchPlaceholder: {
      type: String,
      default: "Search for items",
    },
    /**
     * Header search phrase
     */
    searchValue: {
      type: String,
      default: "",
    },
    /**
     * Header wishlist items quantity
     */
    wishlistItemsQty: {
      type: [String, Number],
      default: "0",
    },
    /**
     * Header cart items quantity
     */
    cartItemsQty: {
      type: [String, Number],
      default: "0",
    },
    /**
     * Header sticky to top
     */
    isSticky: {
      type: Boolean,
      default: false,
    },
    /**
     * Is nav slot visible on mobile view
     */
    isNavVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: [],
      hidden: false,
      sticky: false,
      scrollDirection: null,
      lastScrollPosition: 0,
      animationStart: null,
      animationLong: null,
      animationDuration: 300,
    };
  },
  computed: {
    ...mapMobileObserver(),
    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },
    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    },
  },
  watch: {
    scrollDirection: {
      handler() {
        if (!isClient) return;
        window.cancelAnimationFrame(this.animationLong);
        this.animationLong = null;
        this.animationStart = null;
        this.animationLong = window.requestAnimationFrame(
          this.animationHandler
        );
      },
    },
    isSticky: {
      handler(isSticky) {
        if (!isClient) return;
        this.sticky = isSticky;
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.isSticky) {
      window.addEventListener("scroll", this.scrollHandler, { passive: true });
    }
  },
  beforeDestroy() {
    unMapMobileObserver();
    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler, {
        passive: true,
      });
    }
  },
  methods: {
    animationHandler(timestamp) {
      if (!this.animationStart) this.animationStart = timestamp;
      const progress = timestamp - this.animationStart;
      if (progress < this.animationDuration) {
        this.animationLong = window.requestAnimationFrame(
          this.animationHandler
        );
        return;
      }
      this.hidden = this.scrollDirection === "down";
    },
    scrollHandler() {
      if (!isClient) return;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (!!this.refs) {
        if (currentScrollPosition >= this.$refs.header.offsetHeight) {
          this.scrollDirection =
            currentScrollPosition < this.lastScrollPosition ? "up" : "down";
        }
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
<style lang="scss">
@import "~@highdigital/sharedt/styles/components/organisms/SfHeader.scss";
</style>
