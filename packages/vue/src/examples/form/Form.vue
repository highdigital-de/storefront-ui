<template>
  <div id="form-template">
    <form class="form">
      <h3 class="form__header">
        <span>{{ "Was brauchst Du?" }}</span>
      </h3>
      <div class="form__radios">
        <SfRadio
          name="eu-27"
          value="eu-27"
          label="EU-27"
          details=""
          description=""
        />
        <SfRadio
          name="schweiz"
          value="schweiz"
          label="Schweiz"
          details=""
          description=""
        />
        <SfRadio name="uk" value="uk" label="UK" details="" description="" />
      </div>
      <h3 class="form__header">
        <span>{{ "Das brauchen wir" }}</span>
      </h3>
      <div class="form__group">
        <SfComponentSelect
          v-model="anrede"
          label="Anrede"
          class="form__element form__select col--span-3"
          error-message="Pflichtfeld"
          @blur="anredeBlur = false"
        >
          <SfComponentSelectOption
            v-for="anredeOption in anredeOptions"
            :key="anredeOption"
            :value="anredeOption"
          >
            {{ anredeOption }}
          </SfComponentSelectOption>
        </SfComponentSelect>
        <SfComponentSelect
          v-model="titel"
          label="Titel"
          class="form__element form__select col--span-3"
          error-message="Pflichtfeld"
          @blur="titelBlur = false"
        >
          <SfComponentSelectOption
            v-for="titelOption in titelOptions"
            :key="titelOption"
            :value="titelOption"
          >
            {{ titelOption }}
          </SfComponentSelectOption>
        </SfComponentSelect>
        <SfInput
          v-model="firstName"
          label="Vorname"
          name="firstName"
          class="form__element col--span-3"
          required
          :valid="firstNameBlur || validFirstName(firstName)"
          error-message="Pflichtfeld"
          @blur="firstNameBlur = false"
        />
        <SfInput
          v-model="lastName"
          label="Name"
          name="lastName"
          class="form__element col--span-3"
          required
          :valid="lastNameBlur || validLastName(lastName)"
          error-message="Pflichtfeld"
          @blur="lastNameBlur = false"
        />
        <SfInput
          v-model="email"
          label="E-Mail"
          name="email"
          class="form__element col--span-3"
          required
          :valid="emailBlur || validEmail(email)"
          error-message="Pflichtfeld"
          @blur="emailBlur = false"
        />
        <SfInput
          v-model="password"
          label="Passwort"
          name="password"
          type="password"
          class="form__element col--span-3"
          required
          :valid="passwordBlur || validLastName(password)"
          error-message="Pflichtfeld"
          @blur="password = false"
        />
      </div>
      <div class="form__group">
        <SfInput
          v-model="companyName"
          label="Firma"
          name="companyName"
          class="form__element col--span-3"
          required
          :valid="companyNameBlur || validStreetName(companyName)"
          error-message="Pflichtfeld"
          @blur="companyNameBlur = false"
        />
        <SfInput
          v-model="companyUrl"
          label="Webpräsenz"
          name="companyUrl"
          class="form__element col--span-3"
          required
          :valid="companyUrlBlur || validStreetName(companyUrl)"
          error-message="Pflichtfeld"
          @blur="companyUrlBlur = false"
        />
        <SfComponentSelect
          v-model="country"
          label="Country"
          class="form__element form__select col--span-3"
          required
          :valid="countryBlur || validCountry(country)"
          error-message="Pflichtfeld"
          @blur="countryBlur = false"
        >
          <SfComponentSelectOption
            v-for="countryOption in countries"
            :key="countryOption"
            :value="countryOption"
          >
            {{ countryOption }}
          </SfComponentSelectOption>
        </SfComponentSelect>
        <SfInput
          v-model="zipCode"
          label="PLZ"
          name="zipCode"
          type="number"
          class="form__element"
          required
          :valid="zipCodeBlur || validZipCode(zipCode)"
          error-message="Pflichtfeld"
          @blur="zipCodeBlur = false"
        />
        <SfInput
          v-model="city"
          label="Ort"
          name="city"
          class="form__element col--span-2"
          required
          :valid="cityBlur || validCity(city)"
          error-message="Pflichtfeld"
          @blur="cityBlur = false"
        />
        <SfInput
          v-model="hrb"
          label="HRB"
          type="number"
          name="hrb"
          class="form__element col--span-3"
          required
          :valid="hrbBlur || validApartment(hrb)"
          error-message="Pflichtfeld"
          @blur="hrbBlur = false"
        />
        <SfInput
          v-model="register"
          label="Register"
          name="register"
          type="number"
          class="form__element col--span-3"
          required
          :valid="registerBlur || validPhoneNumber(register)"
          error-message="Pflichtfeld"
          @blur="registerBlur = false"
        />
        <SfInput
          v-model="shopSystem"
          label="Shopsystem"
          name="shopSystem"
          class="form__element col--span-3"
          required
          :valid="shopSystemBlur || validCity(shopSystem)"
          error-message="Pflichtfeld"
          @blur="shopSystemBlur = false"
        />
        <SfInput
          v-model="erp"
          label="ERP/Saas ERP"
          name="erp"
          class="form__element col--span-3"
          required
          :valid="erpBlur || validCity(erp)"
          error-message="Pflichtfeld"
          @blur="erpBlur = false"
        />
        <SfInput
          v-model="numberArticles"
          label="Anzahl Artikel"
          name="numberArticles"
          type="number"
          class="form__element col--span-full"
          required
          :valid="numberArticlesBlur || validPhoneNumber(numberArticles)"
          error-message="Pflichtfeld"
          @blur="numberArticlesBlur = false"
        />
      </div>
      <div class="form__action">
        <SfButton
          type="submit"
          class="sf-button form__action-button--lg"
          @click.prevent="submit"
          >Jetzt Kundenkonto anlegen
        </SfButton>
        <div class="form__login">
          <p>Hast Du schon einen Account?</p>
          <SfButton
            class="sf-button color-light form__action-button form__action-button--secondary"
            @click="reset"
            >Einloggen
          </SfButton>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {
  SfInput,
  SfComponentSelect,
  SfButton,
  SfRadio,
} from "@highdigital/vuet";
export default {
  name: "Default",
  components: {
    SfButton,
    SfInput,
    SfComponentSelect,
    SfRadio,
  },
  data() {
    return {
      valid: false,
      submitted: false,
      firstName: "",
      firstNameBlur: true,
      lastName: "",
      lastNameBlur: true,
      streetName: "",
      streetNameBlur: true,
      hrb: "",
      hrbBlur: true,
      city: "",
      cityBlur: true,
      state: "",
      stateBlur: true,
      zipCode: "",
      zipCodeBlur: true,
      country: "",
      countryBlur: true,
      anrede: "",
      anredeBlur: true,
      titel: "",
      titelBlur: true,
      password: "",
      passwordBlur: true,
      register: "",
      registerBlur: true,
      companyName: "",
      companyNameBlur: true,
      companyUrl: "",
      companyUrlBlur: true,
      shopSystem: "",
      shopSystemBlur: true,
      erp: "",
      erpBlur: true,
      numberArticles: "",
      numberArticlesBlur: true,
      email: "",
      emailBlur: true,
      anredeOptions: ["–––", "Frau", "Herr"],
      titelOptions: ["–––", "Prof.", "Dr."],
      countries: [
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "The Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City",
      ],
      message: "",
      messageBlur: true,
    };
  },
  methods: {
    validate() {
      this.firstNameBlur = false;
      this.lastNameBlur = false;
      this.streetNameBlur = false;
      this.hrbBlur = false;
      this.cityBlur = false;
      this.zipCodeBlur = false;
      this.countryBlur = false;
      this.registerBlur = false;
      this.emailBlur = false;
      this.companyNameBlur = false;
      this.companyUrlBlur = false;
      this.shopSystemBlur = false;
      this.erpBlur = false;
      this.numberArticlesBlur = false;
      this.passwordBlur = false;
      this.messageBlur = false;
      if (
        this.validEmail(this.email) &&
        this.validPhoneNumber(this.register) &&
        this.validFirstName(this.firstName) &&
        this.validLastName(this.lastName) &&
        this.validStreetName(this.streetName) &&
        this.validApartment(this.hrb) &&
        this.validCity(this.city) &&
        this.validZipCode(this.zipCode) &&
        this.validCountry(this.country)
      ) {
        this.valid = true;
      }
    },
    validFirstName(firstName) {
      return firstName.length > 2;
    },
    validLastName(lastName) {
      return lastName.length > 2;
    },
    validStreetName(streetName) {
      return streetName.length > 2;
    },
    validApartment(hrb) {
      const regex = /^[0-9]/;
      return regex.test(hrb);
    },
    validCity(city) {
      return !!city && city.length > 2;
    },
    validZipCode(zipCode) {
      const regex = /^[0-9]/;
      return regex.test(zipCode);
    },
    validCountry(country) {
      return !!country;
    },
    validPhoneNumber(phone) {
      const regex = /^[0-9]{9}$/;
      return regex.test(phone);
    },
    validEmail(email) {
      const regex = /(.+)@(.+){2,}\.(.+){2,}/;
      return regex.test(email.toLowerCase());
    },
    validMessage(message) {
      return !!message && message.length > 10 && message.length <= 400;
    },
    submit() {
      this.validate();
      if (this.valid) {
        this.submitted = true;
      }
    },
    reset() {
      this.email = "";
      this.register = "";
      this.zipCode = "";
      this.country = "";
      this.streetName = "";
      this.city = "";
      this.lastName = "";
      this.firstName = "";
      this.hrb = "";
      this.message = "";
      this.titel = "";
      this.anrede = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@highdigital/vuet/styles";
#form-template {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 870px;
    margin: 0 auto;
  }
}
.form {
  display: grid;
  grid-gap: var(--spacer-lg);
  &__radios {
    display: flex;
    & > * + * {
      margin-left: var(--spacer-xl);
    }
  }
  &__group {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: 100%;
    @include for-desktop {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  &__action {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * + * {
      margin-top: var(--spacer-sm);
    }
    @include for-desktop {
      flex-direction: row;
      justify-content: space-between;
      & > * + * {
        margin-top: 0;
      }
    }
  }
  &__login {
    display: flex;
    & > * + * {
      margin-left: var(--spacer-sm);
    }
  }
  &__action-button--lg {
    padding: var(--spacer-base) var(--spacer-xl);
  }
  &__header {
    font-family: var(--font-primary);
    font-size: var(--font-size--lg);
    font-weight: normal;
    margin-bottom: 0;
  }
}
.col {
  &--span-2 {
    grid-column: 1 / -1;
    @include for-desktop {
      grid-column: span 2;
    }
  }
  &--span-3 {
    grid-column: 1 / -1;
    @include for-desktop {
      grid-column: span 3;
    }
  }
  &--span-full {
    grid-column: 1 / -1;
  }
}
</style>
