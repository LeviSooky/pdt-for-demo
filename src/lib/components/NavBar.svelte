<script>
    import { t } from "$lib/i18n/i18n";
    import EventSelector from "./EventSelector.svelte";
    import LanguageSwitcher from "./LanguageSwitcher.svelte";

    let mockedEvents = [
        {
            id: 1,
            title: 'test valami',
            slug: "slogfaf-afas-fa-"
        },
                {
            id: 2,
            title: 'test vdasdasdasalami',
            slug: "slogfaf-afasdfasfsafaas-fa-"
        },
    ]

</script>
<header class="header">
    <div class="header-container">
        <div class="logo">
            <div class="logo-text">
                <div class="logo-title">Product design</div>
                <div class="logo-main">TALKS</div>
                <div class="logo-subtitle">by ergománia</div>
            </div>
        </div>
        <nav class="nav">
            <EventSelector events={mockedEvents}/>
            <a href="#productDesignTalks">{$t("nav.productDesignTalks")}</a>
            <a href="#program">{$t("nav.program")}</a>
            <a href="#contact">{$t("nav.contact")}</a>
            <LanguageSwitcher />
            <a href="#eventRegistration" class="btn-register"
                >{$t("nav.register")}</a
            >
        </nav>
    </div>
</header>
