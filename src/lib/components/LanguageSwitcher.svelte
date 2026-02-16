<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Locale } from '$lib/i18n/i18n.js';
    import { locale, locales } from '$lib/i18n/i18n.js';    
    
    async function switchLocale(newLocale: Locale) {
        await goto(`/${newLocale}`);
    }

</script>

<div class="language-switcher">
    {#each locales as lang}
        <button 
            class="lang-btn" 
            class:active={$locale === lang}
            onclick={() => switchLocale(lang)}
        >
            {lang.toUpperCase()}
        </button>
    {/each}
</div>

<style>
    .language-switcher {
        display: flex;
        gap: 10px;
    }
    
    .lang-btn {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: #fff;
        padding: 5px 12px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .lang-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .lang-btn.active {
        background: #fff;
        color: #FF7A59;
        border-color: #fff;
    }
</style>