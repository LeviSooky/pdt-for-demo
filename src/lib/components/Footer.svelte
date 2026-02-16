<script>
    import { locale, t } from "$lib/i18n/i18n";
    import { get } from "svelte/store";

</script>
<footer id="contact" class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo-section">
                <img
                    src="//eregocdn-b22b.kxcdn.com/ergomania-talks/desktop/ergo-logo-color.png"
                    alt="Ergománia"
                    class="footer-logo"
                />
                <p class="footer-copyright">{$t("footer.copyright")}</p>
            </div>

            <div class="footer-columns">
                <div class="footer-column">
                    <h4>{$t("footer.sections.ergomania.title")}</h4>
                    <ul>
                        <li>
                            <a
                                href={get(locale) === "en"
                                    ? "https://ergomania.eu#caseStudies"
                                    : "http://ergomania.hu/#ux-esettanulmanyok"}
                                >{$t(
                                    "footer.sections.ergomania.links.ourWork",
                                )}</a
                            >
                        </li>
                        <li>
                            <a
                                href={get(locale)
                                    ? "https://ergomania.eu#meetTheTeam"
                                    : "https://ergomania.hu#meetTheTeam"}
                                >{$t(
                                    "footer.sections.ergomania.links.aboutUs",
                                )}</a
                            >
                        </li>
                        <li>
                            <a
                                href={get(locale)
                                    ? "https://ergomania.eu/our-services/"
                                    : "https://ergomania.hu/ux-szolgaltatasok/"}
                                >{$t(
                                    "footer.sections.ergomania.links.services",
                                )}</a
                            >
                        </li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>{$t("footer.sections.followUs.title")}</h4>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/ergomania"
                                >{$t(
                                    "footer.sections.followUs.links.facebook",
                                )}</a
                            >
                        </li>
                        <li>
                            <a href="https://twitter.com/rungandras"
                                >{$t(
                                    "footer.sections.followUs.links.twitter",
                                )}</a
                            >
                        </li>
                        <li>
                            <a href="https://hu.linkedin.com/company/ergomania"
                                >{$t(
                                    "footer.sections.followUs.links.linkedin",
                                )}</a
                            >
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ergomania_ux/"
                                >{$t(
                                    "footer.sections.followUs.links.instagram",
                                )}</a
                            >
                        </li>
                        <li>
                            <a href="https://ergomania-ux.medium.com/"
                                >{$t(
                                    "footer.sections.followUs.links.medium",
                                )}</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://plus.google.com/103913401554677227735"
                                >{$t(
                                    "footer.sections.followUs.links.googlePlus",
                                )}</a
                            >
                        </li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>{$t("footer.sections.contact.title")}</h4>
                    <ul>
                        <li>
                            <a href="mailto:hello@ergomania.eu"
                                >hello@ergomania.eu</a
                            >
                        </li>
                        <li><a href="tel:+36303975008">+36 30 397 5008</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>