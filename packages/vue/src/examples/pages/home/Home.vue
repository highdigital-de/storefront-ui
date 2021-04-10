<template>
  <div id="home">
    <!-- intro section/hero -->
    <div class="fullwidth-wrapper">
      <section class="header-section">
        <h1>
          <span class="cl-accent">{{ "Umsatzsteuerfrei liefern" }}</span>
          <span>{{ "Grenzüberschreitend B2C in 30 europäische Länder" }}</span>
        </h1>
        <SfButton link="#">
          {{ "Anmelden" }}
        </SfButton>
      </section>
    </div>
    <!-- map -->
    <div class="fullwidth-wrapper bg-light">
      <section>
        <div class="benefits">
          <span>{{ "Registrierungsfrei" }}</span>
          <span>{{ "Steuerfrei" }}</span>
          <span>{{ "Haftungsfrei" }}</span>
        </div>
        <h2>
          <span>{{ "Stressfrei in alle EU-27" }}</span>
          <span>{{ "+ Schweiz" }}</span>
          <span>{{ "+ Großbritannien liefern" }}</span>
        </h2>
      </section>
    </div>
    <!-- benefits -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "Umsatzsteuerfrei liefern nach ganz Europa" }}</span>
        </h2>
        <ul class="features offset">
          <li>
            <p class="medium">{{ "Steuerfrei" }}</p>
            <p>
              {{
                "Deine Ausgangsrechnung zeigt in ganz Europa immer 0% Umsatzsteuer."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Haftungsfrei" }}</p>
            <p>
              {{
                "In deiner Buchhaltung gibt es 0,00 EUR ausländische  Steuerschulden."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Registrierungsfrei" }}</p>
            <p>{{ "Du musst dich in keinem EU-Land registrieren." }}</p>
          </li>
          <li>
            <p class="medium">{{ "Betriebsprüfungsfrei" }}</p>
            <p>
              {{
                "Keine Betriebsprüfungen im Ausland. Die Haftung liegt bei eClear."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Sorgenfrei" }}</p>
            <p>
              {{
                "Mit Steuersätzen, Ausnahmen und den häufigen Änderungen beschäftigen wir uns. Dein Steuersatz ist immer 0% Umsatzsteuer."
              }}
            </p>
          </li>
        </ul>
      </section>
    </div>
    <!-- slider -->
    <div class="fullwidth-wrapper bg-secondary">
      <section class="offset-y">
        <h2 class="text-primary">
          <span>{{ "8’065 Händer sind schon angeschlossen" }}</span>
        </h2>
        <SfHero class="hero">
          <SfHeroItem
            v-for="(img, index) in heroes"
            :key="index"
            :image="img.image"
            :title="img.title"
            :subtitle="img.subtitle"
            :button-text="img.buttonText"
            :background="img.background"
            :class="img.className"
          />
        </SfHero>
      </section>
    </div>
    <!-- easy register -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span class="text-primary">{{ "Easy register." }}</span
          ><br />
          <span>{{ "Einfach ganz Europa" }}</span>
        </h2>
        <div class="steps">
          <div class="step step-1 active">
            <div class="number">{{ "1" }}</div>
            <div class="label">{{ "Jetzt" }}<br />{{ "anmelden" }}</div>
          </div>
          <div class="arrow"></div>
          <div class="step step-2">
            <div class="number">{{ "2" }}</div>
            <div class="label">{{ "Vertrag" }}<br />{{ "abschließen" }}</div>
          </div>
          <div class="arrow"></div>
          <div class="step step-3">
            <div class="number">{{ "3" }}</div>
            <div class="label">
              {{ "Nach ganz" }}<br />{{ "Europa liefern" }}
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- wir schaffen die mwst ab -->
    <div class="fullwidth-wrapper bg-primary">
      <section>
        <h2>
          <span>{{ "Wir schaffen die Mehrwertsteuer in Europa ab." }}</span
          ><br />
          <span class="text-light--variant">{{
            "Für eCommerce Händler bei grenz-überschreitenden B2C Lieferungen. "
          }}</span>
        </h2>
        <p class="fs-xl">Du kümmerst dich um’s Geschäft!</p>
        <SfButton link="#" class="color-light">
          {{ "Jetzt registrieren" }}
        </SfButton>
      </section>
    </div>
    <!-- service -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "Unser Service – Dein Vorteil" }}</span
          ><br />
          <span class="cl-accent">{{ "Alles inbegriffen" }}</span>
        </h2>
        <ul class="checked offset">
          <li>
            <p class="medium">{{ "Steuerrückerstattung sofort" }}</p>
            <p>
              {{
                "Umgehende Erstattung von Steuerbeiträgen durch ausländische Steuerbehörden zum Beispiel bei Retouren."
              }}
            </p>
          </li>
        </ul>
        <ul class="checked col-2 offset">
          <li>
            <p class="medium">{{ "Ein Ansprechpartner in deiner Sprache" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Intrastat Berichte automatisch" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Detaillierte Übersicht aller Orders" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Nur ein Reconfile pro Tag" }}</p>
          </li>
          <li>
            <p class="medium">{{ "24/7 Service Hotline" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Intuitives Dashboard" }}</p>
          </li>
        </ul>
      </section>
    </div>
    <!-- easy integrate -->
    <div class="fullwidth-wrapper bg-light">
      <section>
        <h2>
          <span class="text-primary">{{ "Easy integrate" }}</span
          ><br />
          <span>{{ "Unsere kostenlosen shop hosting PlugIns und APIs" }}</span>
        </h2>
        <div class="offset-left col-2">
          <div>
            <h3 class="fs-xl regular">{{ "PlugIn und Integrations" }}</h3>
            <div class="producttiles">
              <div class="tile">
                <img
                  src="~@highdigital/vuet/public/assets/storybook/images/210224_Kacheln_800x800_Ing_final112.png"
                  width="100%"
                  height="auto"
                />
              </div>
              <div class="tile">
                <img
                  src="~@highdigital/vuet/public/assets/storybook/images/210224_Kacheln_800x800_Ing_final112.png"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div>{{ "API System Beschreibung verfügbar" }}</div>
          </div>
          <div>
            <h3 class="fs-xl regular">{{ "APIs" }}</h3>
            <div class="producttiles">
              <div class="tile">
                <img
                  src="~@highdigital/vuet/public/assets/storybook/images/210224_Kacheln_800x800_Ing_final117.png"
                  width="100%"
                  height="auto"
                />
              </div>
              <div class="tile">
                <img
                  src="~@highdigital/vuet/public/assets/storybook/images/210224_Kacheln_800x800_Ing_final117.png"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- preise -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "Preise" }}</span>
        </h2>
        <table class="preise offset-left">
          <tbody>
            <tr class="fs-xl">
              <td class="title medium">{{ "PlugIn + APIs" }}</td>
              <td class="description cl-accent">
                {{ "Bei uns kostenlos" }}
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="title medium">{{ "Datev Schnittstelle" }}</td>
              <td class="description cl-accent">
                {{ "Bei uns inklusive" }}
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="title medium">
                {{ "Onboarding einmalig" }}<br />{{ "EU-27" }}
              </td>
              <td class="description">
                <div class="inner-row">
                  {{ "Bis 2000 SKUs" }}<br />{{ "890,00 EUR" }}
                </div>
                <hr />
                <div class="inner-row">
                  {{ "Je weitere 1000 SKUs" }}<br />{{ "240,00 EUR" }}
                </div>
                <hr />
                <div class="inner-row last">
                  {{ "Artikelvarianten gelten" }}<br />{{ "als 1 Artikel" }}
                </div>
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="title medium">
                {{ "Einreihung" }}<br />{{ "Artikelzuordnung" }}<br />{{
                  "(Assignment)"
                }}
              </td>
              <td class="description cl-accent">
                {{ "Bei uns inklusive" }}
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="title medium">
                {{ "Aufschlag Onboardung" }}<br />{{ "Großbritannien" }}<br />{{
                  "Schweiz"
                }}
              </td>
              <td class="description">{{ "UK 150%" }}<br />{{ "CH 150%" }}</td>
            </tr>
            <tr class="fs-xl">
              <td class="title medium">
                {{ "Transaktionsgebühr" }}<br />{{ "auf GMV" }}
              </td>
              <td class="description">
                {{ "1.25 – 4.75%" }}<br />{{ "gem. Angebot" }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <!-- expertise -->
    <div class="fullwidth-wrapper bg-primary">
      <section>
        <div class="col-2">
          <div>
            <h2>
              <span class="text-light">{{ "Unsere Expertise" }}</span
              ><br />
              <span>{{ "Mehrwertsteuer" }}</span>
            </h2>
            <p class="fs-xl">
              <span class="medium">{{
                "Anita Richter, Syndikus-Steuerberaterin"
              }}</span
              ><br />
              <span>{{ "Vice President Tax Technology Innovation" }}</span>
            </p>
            <SfButton link="#" class="color-light">
              {{ "Frag Anita" }}
            </SfButton>
          </div>
          <div class="rounded-img-container"></div>
        </div>
        <div>
          <table class="qa offset-left">
            <tbody>
              <tr>
                <td class="question medium">
                  {{ "Brauche ich gar keine Registrierung mehr?" }}
                </td>
                <td class="fs-xl medium">
                  {{ "Richtig!" }}<br />{{
                    "Du brauchst gar keine Registrierung im Ausland mehr. Übrigens auch keine Steuerberater vor Ort."
                  }}
                </td>
              </tr>
              <tr>
                <td class="question medium">
                  {{
                    "Was ist, wenn ich im Ausland ein Lager betreibe? Zum Beispiel Amazon FBA."
                  }}
                </td>
                <td class="fs-xl medium">
                  {{ "Kein Problem!" }}<br />{{
                    "Dann benötigst Du eine Registrierung in diesem Land, um eine Meldung zu erstellen (ohne Zahlung). Das können wir Dir als automatisierten und integrierten Prozess anbieten. Sprich uns nach Deiner Registrierung darauf an."
                  }}
                </td>
              </tr>
              <tr>
                <td class="question medium">
                  {{
                    "Ich bin schon in einigen Ländern registriert. Kann ich ClearVAT mit diesen Registrierungen kombinieren?"
                  }}
                </td>
                <td class="fs-xl medium">
                  {{ "Ja, das ist möglich!" }}<br />{{
                    "Der Preis ist dann möglicherweise etwas höher. Gib das bei der Registrierung einfach an, wir berücksichtigen es beim Angebot"
                  }}
                </td>
              </tr>
              <tr>
                <td class="question medium">
                  {{
                    "Muss ich die Steuersätze und die ganzen Ausnahmen für meine Produkte in allen Ländern kennen?"
                  }}
                </td>
                <td class="fs-xl medium">
                  {{ "Nein!" }}<br />{{
                    "Wir kennen die Steuersätze für über 80 Millionen Artikel in 30 Europäischen Ländern inkl. alle Ausnahmen – also rund 2,4 Mrd. Codes"
                  }}
                </td>
              </tr>
              <tr>
                <td class="question medium">
                  {{ "Wie verbuche ich die Lieferungen?" }}
                </td>
                <td class="fs-xl medium">
                  {{ "Ganz einfach!" }}<br />{{
                    "Du bekommst von unseren MwSt-Experten ein Merkblatt für Deine Buchhaltung und Deinen Steuerberater."
                  }}
                </td>
              </tr>
              <tr>
                <td class="question medium">
                  {{
                    "Wer übernimmt die steuerliche Haftung und das Risiko der Umsatzsteuerprüfung im Ausland?"
                  }}
                </td>
                <td class="fs-xl medium">
                  {{ "Wir." }}<br />{{
                    "eClear befreit Dich vollständig von allen MwSt-Verpflichtungen im Lieferland."
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <!-- sicherheit -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span class="text-primary">{{ "Zertifizierte Sicherheit" }}</span
          ><br />
          <span>{{ "für dein Geschäft" }}</span>
        </h2>
        <div class="col-4">
          <div class="certification">
            <img
              src="~@highdigital/vuet/public/assets/storybook/images/logo_bafin.png"
            />
            <p>
              {{
                "Wir sind ein EU-weit reguliertes Zahlungsinstitut und Acquirer nach ZAG."
              }}
            </p>
          </div>
          <div class="certification">
            <img
              src="~@highdigital/vuet/public/assets/storybook/images/logo_lbdo.png"
            />
            <p>
              {{
                "Die Buchhaltungssysteme (GoB), Steuerlogik und die gesamte Software von ClearVAT sind nach Prüfungsstandard 880 des Institutes der Wirtschaftprüfer zertifiziert."
              }}
            </p>
          </div>
          <div class="certification">
            <img
              src="~@highdigital/vuet/public/assets/storybook/images/logo_sap.png"
            />
            <p>
              {{ "Wir arbeiten auf  SAP S4/HANA und sind SAP zertifiziert." }}
            </p>
          </div>
          <div class="certification">
            <img
              src="~@highdigital/vuet/public/assets/storybook/images/logo_sap-certified.png"
            />
            <p>
              {{
                "Auf dem neusten SAP S4/HANA Coresystem mit der hochperformanten In-Memory Database Technologie sowie SAP zertifiziert."
              }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- oss -->
    <div class="fullwidth-wrapper bg-light">
      <section>
        <h2>
          <span class="text-primary">{{ "Der OSS – eine Alternative?" }}</span
          ><br />
          <span>{{
            "Wenn du über den OSS nachdenkst, so solltest du Folgendes wissen:"
          }}</span>
        </h2>
        <ul class="minus col-2 offset-left">
          <li>
            <p class="medium">{{ "Haftung" }}</p>
            <p>
              {{
                "Du meldest im Heimatland aber, du bleibst steuerpflichtig im Bestimmungsland."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Geld" }}</p>
            <p>
              {{
                "Du zahlst im Heimatland aber die Rückerstattung kommt aus dem Ausland – das kann dauern."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Registrierung und Meldung" }}</p>
            <p>
              {{
                "Das macht ab 1.7.21 dein Steuerberater.  Allerdings haftet er dann auch. Mal sehen, ob er mitmacht."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Auslandslager" }}</p>
            <p>
              {{
                "In Ländern, in denen du ein Lager betreibst (z.B. Amazon FBA) ist der OSS ausgeschlossen."
              }}
            </p>
          </li>
          <li>
            <p class="medium">{{ "Registrierung und Meldung" }}</p>
            <p>
              {{
                "Das macht ab 1.7.21 dein Steuerberater.  Allerdings haftet er dann auch. Mal sehen, ob er mitmacht."
              }}
            </p>
          </li>
        </ul>
      </section>
    </div>
    <!-- oss vs clearvat -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "OSS vs. ClearVAT" }}</span>
        </h2>
        <table class="comparison offset-left">
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>{{ "OSS" }}</th>
              <th>{{ "clearVAT" }}</th>
            </tr>
            <tr class="fs-xl">
              <td class="step medium">
                <span>{{ "1" }}</span>
              </td>
              <td class="title medium">{{ "Tax Rates" }}</td>
              <td class="description">
                {{ "Du bekommst die richtigen Steuersätze für deine Artikel" }}
              </td>
              <td class="oss icon">
                <img src="/assets/storybook/icons/icon_x.svg" />
              </td>
              <td class="clearvat icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="step medium">
                <span>{{ "2" }}</span>
              </td>
              <td class="title medium">{{ "Tax Assignment" }}</td>
              <td class="description">
                {{ "Die Steuersätze werden den Artikeln zugeordnet" }}
              </td>
              <td class="oss icon">
                <img src="/assets/storybook/icons/icon_x.svg" />
              </td>
              <td class="clearvat icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="step medium">
                <span>{{ "3" }}</span>
              </td>
              <td class="title medium">{{ "Tax Calculation" }}</td>
              <td class="description">
                {{
                  "Die Steuersätze werden im Checkout je Land richtig ausgewiesen"
                }}
              </td>
              <td class="oss icon">
                <img src="/assets/storybook/icons/icon_x.svg" />
              </td>
              <td class="clearvat icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="step medium">
                <span>{{ "4" }}</span>
              </td>
              <td class="title medium">
                {{ "Registrieren," }}<br />{{ "melden und" }}<br />{{
                  "zahlen"
                }}
              </td>
              <td class="description">
                {{ "Keine Registrierung mehr nötig." }}<br />{{
                  "Umsätze automatisiert melden"
                }}<br />{{ "und die Steuern bezahlen" }}
              </td>
              <td class="oss icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
                <img src="/assets/storybook/icons/icon_x.svg" />
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
              <td class="clearvat icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="step medium">
                <span>{{ "5" }}</span>
              </td>
              <td class="title medium">{{ "Reclaim" }}</td>
              <td class="description">
                {{ "Du willst schnell deine Erstattungen" }}
              </td>
              <td class="oss icon">
                <img src="/assets/storybook/icons/icon_x.svg" />
              </td>
              <td class="clearvat icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
            </tr>
            <tr class="fs-xl">
              <td class="step last medium">
                <span>{{ "6" }}</span>
              </td>
              <td class="title medium">{{ "Betriebsprüfung Haftung" }}</td>
              <td class="description">
                {{
                  "Dir wird die Haftung und die Kommunikation mit ausländischen Behörden abgenommen"
                }}
              </td>
              <td class="oss icon">
                <img src="/assets/storybook/icons/icon_x.svg" />
              </td>
              <td class="clearvat icon">
                <img src="/assets/storybook/icons/icon_checkmark-small.svg" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
import { SfButton, SfHero } from "@highdigital/vuet";
export default {
  name: "Home",
  components: {
    SfButton,
    SfHero,
  },
  data() {
    return {
      headingTitle: {
        mobile: "Match it with",
        desktop: "Bestsellers",
      },
      heroes: [
        {
          title:
            "ClearVAT macht unsere EU-Steuern – wir kümmern uns lieber um die Kunst.",
          subtitle: "Dr. Vanessa Moos, Managing Director",
          buttonText: "Learn more",
          background: "rgb(236, 239, 241)",
          image: "/assets/storybook/images/slider-img_fineartmultiple.jpg",
        },
        {
          title: "Banner 2 Title",
          subtitle: "Banner 2 Subtitle",
          buttonText: "Learn more",
          background: "rgb(239, 235, 233)",
          image: "/assets/storybook/images/slider-img_fineartmultiple.jpg",
        },
        {
          title: "Banner 3 Title",
          subtitle: "Banner 3 Subtitle",
          buttonText: "Learn more",
          background: "rgb(236, 239, 241)",
          image: "/assets/storybook/images/slider-img_fineartmultiple.jpg",
        },
      ],
      banners: [
        {
          slot: "banner-A",
          subtitle: "Dresses",
          title: "Cocktail & Party",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerF.jpg",
          class: "desktop-only",
        },
        {
          slot: "banner-B",
          subtitle: "Dresses",
          title: "Linen Dresses",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerE.jpg",
          class: "desktop-only",
        },
        {
          slot: "banner-C",
          subtitle: "T-Shirts",
          title: "The Office Life",
          image: "/assets/storybook/Home/bannerC.jpg",
        },
        {
          slot: "banner-D",
          subtitle: "Summer Sandals",
          title: "Eco Sandals",
          image: "/assets/storybook/Home/bannerG.jpg",
        },
      ],
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: true,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 25.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: true,
          reviews: 8,
          badgeLabel: "-50%",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 45.00" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "-10%",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
      ],
      instagramFeed: [
        [
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageA.png",
          },
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageB.png",
          },
        ],
        [
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageC.jpg",
          },
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageD.jpg",
          },
        ],
      ],
    };
  },
  methods: {
    toggleWishlist(index) {
      return (this.products[index].isOnWishlist = !this.products[index]
        .isOnWishlist);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@highdigital/vuet/styles";
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
section {
  padding-bottom: 240px;
  padding-top: 232px;
}
section.offset-y {
  padding-bottom: 0;
  padding-top: 112px;
  position: relative;
  top: 120px;
}
.medium {
  font-family: var(--font-family--secondary);
}
.regular {
  font-family: var(--font-family--primary);
}
.fullwidth-bg {
  background: #cc0000;
  width: 100%;
}
.fullwidth-wrapper {
  margin: 0 -9999rem;
  padding: 0.25rem 9999rem;
  width: 100%;
}
.section {
  position: relative;
  &__wrapper {
    position: var(--header-wrapper-position);
    width: 100%;
    background: var(--header-background, #ffffff);
    //transition: var(--header-wrapper-transition, transform 150ms ease-in-out);
    transform: var(--header-wrapper-transform);
    box-shadow: var(--header-box-shadow);
  }
}
.offset {
  padding: 0 var(--spacer-3xl);
}
.offset-left {
  padding-left: var(--spacer-3xl);
}
.offset-right {
  padding-right: var(--spacer-3xl);
}
.cl-accent {
  color: var(--c-primary);
}
.fs-xl {
  font-size: var(--font-size--xl);
}
.benefits span {
  bottom: 20px;
  position: relative;
  font-family: var(--font-family--secondary);
  font-size: 32px;
  padding: 0 45px;
}
.benefits span:before {
  content: url("~@highdigital/vuet/public/assets/storybook/icons/icon_checkmark_large.svg");
  position: relative;
  top: 20px;
}
ul.features,
ul.checked,
ul.minus {
  list-style-type: none;
}
ul.features li,
ul.checked li,
ul.minus li {
  padding-bottom: 48px;
  padding-left: 64px;
  position: relative;
}
ul.features li:before {
  content: url("~@highdigital/vuet/public/assets/storybook/icons/icon_plus.svg");
  left: -48px;
  position: absolute;
}
ul.checked li:before {
  content: url("~@highdigital/vuet/public/assets/storybook/icons/icon_checkmark_large.svg");
  left: -48px;
  position: absolute;
}
.col-2 {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, 1fr);
}
.col-4 {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(4, 1fr);
}
ul.minus li {
  margin-right: 32px;
}
ul.minus li:before {
  content: url("~@highdigital/vuet/public/assets/storybook/icons/icon_minus.svg");
  left: -48px;
  position: absolute;
  top: 16px;
}
ul.features li p,
ul.checked li p,
ul.minus li p {
  font-size: var(--font-size--xl);
  line-height: 1.325;
  margin: 8px 0;
}
div.checked:before {
  content: url("~@highdigital/vuet/public/assets/storybook/icons/icon_checkmark_large.svg");
}
.steps {
  display: flex;
  align-items: baseline;
}
.step {
  display: inline-block;
  text-align: center;
}
.step .number {
  align-items: center;
  border: 8px solid;
  border-color: var(--c-primary);
  border-radius: 50%;
  display: flex;
  font-family: var(--font-family--secondary);
  font-size: var(--font-size--xl);
  height: 200px;
  justify-content: center;
  margin-bottom: 32px;
  width: 200px;
}
.step.active .number {
  background-color: var(--c-primary);
}
.step .label {
  font-family: var(--font-family--secondary);
  font-size: var(--font-size--xl);
}
.steps .arrow {
  content: url("~@highdigital/vuet/public/assets/storybook/icons/icon_arrow-horizontal.svg");
  display: inline-block;
  padding: 0 48px;
}
.producttiles {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 120px;
}
.producttiles .tile {
  background: var(--c-secondary-variant);
  border-radius: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  height: 160px;
  margin-right: 32px;
  overflow: hidden;
  width: 160px;
}
.rounded-img-container {
  background: url("~@highdigital/vuet/public/assets/storybook/images/anita-richter_1200.jpg");
  border-radius: 50% 0 0 50%;
  height: 720px;
  overflow: hidden;
  width: 860px;
}
.rounded-img-container img {
  height: auto;
  width: 100%;
}
table.qa {
  margin-top: 120px;
}
table.qa td {
  border-bottom: 1px solid var(--c-light);
  vertical-align: top;
  padding: 40px 0;
  &.question {
    padding-right: 48px;
  }
}
table.comparison,
table.preise {
  width: 100%;
}
table.comparison .step:before {
  border-left: 3px solid var(--c-primary);
  content: "";
  display: block;
  height: 100px;
  left: 13%;
  position: relative;
  top: 100%;
  z-index: -999;
}
table.comparison .step.last:before {
  border-left: none;
  content: "";
}
table.comparison .step {
  align-items: center;
  background-color: white;
  border: 8px solid var(--c-primary);
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  margin-right: 32px;
  width: 80px;
}
table.comparison .step span {
  padding-top: 4px;
}
table.comparison td,
table.preise td {
  border-bottom: 1px solid #bfbfbf;
  line-height: 1.2;
  margin: 32px 0;
}
table.preise hr {
  border: none;
  border-top: 1px solid #bfbfbf;
}
table.preise div.inner-row {
}
table.preise div.inner-row.last {
  border-bottom: none;
}
table.preise td {
  padding: 32px 0;
  vertical-align: top;
}
table.comparison td.icon img {
  display: block;
  padding: 0 24px;
}
.hero {
  --hero-item-background-position: center;
}
.match-with-it {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: var(--spacer-xl);
  font-size: var(--h3-font-size);
  font-family: var(--font-family--secondary);
  font-weight: var(--font-weight--bold);
  border-bottom: solid 1px var(--c-light);
  &__paragraph {
    margin-bottom: var(--spacer-xs);
  }
  @include for-desktop {
    border: none;
    justify-content: center;
    font-weight: var(--font-weight--semibold);
  }
}
.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
.banner-grid {
  margin: var(--spacer-base) 0;
  --banner-container-width: 50%;
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.share-your-look {
  --heading-title-font-weight: var(--font-weight--semibold);
  @include for-desktop {
    --section-margin: var(--spacer-2xl) 0;
  }
}
.call-to-action {
  display: flex;
}
.instagram-grid {
  max-width: 60rem;
  margin: 0 auto;
  &__row {
    display: flex;
    & + & {
      margin: var(--spacer-xs) 0 0 0;
      @include for-desktop {
        margin: calc(var(--spacer-xl) / 2) 0 0 0;
      }
    }
  }
  &__col {
    flex: 1;
    margin: 0;
    & + & {
      margin: 0 0 0 var(--spacer-xs);
      @include for-desktop {
        margin: 0 0 0 calc(var(--spacer-xl) / 2);
      }
    }
  }
}
.app-banner {
  --banner-container-width: 100%;
  --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
  --banner-padding: 0 var(--spacer-2xl);
  --banner-title-font-size: var(--h1-font-size);
  --banner-subtitle-font-size: var(--font-size--xl);
  --banner-title-font-weight: var(--font-weight--semibold);
  --banner-subtitle-font-weight: var(--font-weight--medium);
  --banner-title-text-transform: capitalize;
  --banner-subtitle-text-transform: capitalize;
  display: block;
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
  &__call-to-action {
    --button-background: transparent;
    display: flex;
  }
  &__button {
    --image-width: 8.375rem;
    --image-height: 2.75rem;
    --button-padding: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
    }
  }
}
</style>
