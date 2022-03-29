<template>
    <div id="app">
        <v-app id="inspire" class="v-application">
            <AppNavbar />
            <div class="my-container">
                <router-view id="scrolling-techniques-2" />
            </div>
            <AppFooter></AppFooter>
            <SnackBar></SnackBar>
            <CookieSnackBar></CookieSnackBar>
        </v-app>
    </div>
</template>

<script lang="ts">
import { isAuthorized } from '@/core/services/auth.services'
import Vue from 'vue'
import AppNavbar from '@/core/components/app/AppNavbar/AppNavbar.vue'
import Component from 'vue-class-component'
import AppFooter from '@/core/components/app/AppFooter/AppFooter.vue'
import SnackBar from '@/core/components/app/SnackBar/SnackBar.vue'
import CookieSnackBar from '@/core/components/app/CookieSnackBar/CookieSnackBar.vue'

@Component({
    components: { AppFooter, AppNavbar, SnackBar, CookieSnackBar },
})
export default class App extends Vue {
    mounted(): void {
        isAuthorized()

        setInterval(() => {
            isAuthorized()
        }, 3600000)
    }
}
</script>

<style lang="scss">
@import '../public/assets/fonts/source sans pro/sourcesanspro.css';

$mdi-font-name: 'Source Sans Pro';
$body-font-family: 'Source Sans Pro';
$title-font: 'Comfortaa';
$my-color-button-1: '#00bd007d';

$material-light: (
    'background': #fff,
);

.row {
    margin: 0 !important;
}

* {
    font-family: $body-font-family, sans-serif;
}

.v-application {
    background: linear-gradient(180deg, transparent, black);

    em {
        font-size: medium;
    }

    .container {
        padding: 0 !important;
    }

    p,
    .v-card__text,
    .my-card-text {
        text-align: justify;
        white-space: pre-wrap;
        word-break: break-word;
    }

    .my-container {
        //padding-top: 60px !important;
        padding-bottom: 80px !important;
        height: 100%;

        a {
            &:hover {
                color: #1a9dfd;
            }
        }

        .ProseMirror {
            * {
                color: #2c3e50;
            }

            &.vue-line-clamp {
                overflow: visible;
            }

            a {
                color: #1a9dfd;
                font-weight: 600;
                text-decoration: none;
            }

            p.is-editor-empty:first-child::before {
                content: attr(data-placeholder);
                float: left;
                color: #ced4da;
                pointer-events: none;
                height: 0;
            }

            font-size: 1.2em;
            line-height: 25px;

            p {
                font-size: 18px;
            }

            select {
                color: black !important;
                background-color: whitesmoke;
                border-radius: 5px;
            }

            .color {
                white-space: nowrap;

                &::before {
                    content: ' ';
                    display: inline-block;
                    width: 1em;
                    height: 1em;
                    border: 1px solid rgba(128, 128, 128, 0.3);
                    vertical-align: middle;
                    margin-right: 0.1em;
                    margin-bottom: 0.15em;
                    border-radius: 2px;
                    background-color: var(--color);
                }
            }

            blockquote {
                margin: 30px 0;
                color: #8a8a8a;
                font-weight: 600;
                //font-style: italic;
                padding-left: 1rem;
                border-left: 2px solid rgba(#0d0d0d, 0.1);
            }

            .mention {
                color: #a975ff;
                background-color: rgba(#a975ff, 0.1);
                border-radius: 0.3rem;
                padding: 0.1rem 0.3rem;
            }

            .character-count {
                margin-top: 1rem;
                display: flex;
                align-items: center;
                color: #68cef8;

                &--warning {
                    color: #fb5151;
                }

                &__graph {
                    margin-right: 0.5rem;
                }

                &__text {
                    color: #868e96;
                }
            }

            hr {
                opacity: 0.5;
            }

            > * + * {
                margin-top: 0.75em;
            }

            pre {
                background: #eff3ff;
                color: #2c3e50;
                padding: 0.75rem 1rem;
                border-radius: 0.5rem;
                overflow-x: scroll;

                * {
                    font-size: smaller;
                    font-family: 'JetBrainsMono', monospace !important;
                }

                code {
                    white-space: pre;
                    color: inherit;
                    padding: 0;
                    background: none;
                    //font-size: 0.8rem;
                }

                .hljs-comment,
                .hljs-quote {
                    color: #616161;
                }

                .hljs-variable,
                .hljs-template-variable,
                .hljs-attribute,
                .hljs-tag,
                .hljs-name,
                .hljs-regexp,
                .hljs-link,
                .hljs-name,
                .hljs-selector-id,
                .hljs-selector-class {
                    color: #f98181;
                }

                .hljs-number,
                .hljs-meta,
                .hljs-built_in,
                .hljs-builtin-name,
                .hljs-literal,
                .hljs-type,
                .hljs-params {
                    color: #fbbc88;
                }

                .hljs-string,
                .hljs-symbol,
                .hljs-bullet {
                    color: #b9f18d;
                }

                .hljs-title,
                .hljs-section {
                    color: #faf594;
                }

                .hljs-keyword,
                .hljs-selector-tag {
                    color: #70cff8;
                }

                .hljs-emphasis {
                    font-style: italic;
                }

                .hljs-strong {
                    font-weight: 700;
                }
            }
        }
    }
}

@media screen and (max-width: 1268px) {
    .v-application {
        .my-container {
            .ProseMirror {
                img {
                    max-width: 100%;
                    //width: auto !important;
                    //margin-left: 0 !important;
                    //margin-right: 0 !important;
                    //height: auto !important;
                }
            }
        }
    }
}

@media screen and (min-width: 1600px) {
    .container {
        max-width: 1570px;
    }
}

*,
html * /* override x.xhtml.ru style */ {
    scrollbar-width: thin;
    scrollbar-color: #dbdbdb lightgray;
}

//*::-webkit-scrollbar,
//html *::-webkit-scrollbar {
//    height: 12px;
//    width: 12px;
//}
//*::-webkit-scrollbar-track,
//html *::-webkit-scrollbar-track {
//background: lightblue;
//}
//*::-webkit-scrollbar-thumb,
//html *::-webkit-scrollbar-thumb {
//    background-color: #dbdbdb;
//    border-radius: 5px;
//    border: 3px solid #dbdbdb;
//}
//
//
//::-webkit-scrollbar-button {
//    background-repeat: no-repeat;
//    width: 5px;
//    height: 0;
//}
//
//::-webkit-scrollbar-track {
//    background-color: #ecedee;
//}
//
//::-webkit-scrollbar-thumb {
//    -webkit-border-radius: 0;
//    border-radius: 0;
//    background-color: lightgray;
//}
//
//::-webkit-scrollbar-thumb:hover {
//    background-color: gray;
//}
//
//::-webkit-resizer {
//    background-repeat: no-repeat;
//    width: 14px;
//    height: 0;
//}
//
//::-webkit-scrollbar {
//    width: 10px;
//}
</style>
