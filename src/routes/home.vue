<template>
    <div class="home">
        <section class="container">

            <h1>Interpol DB - Cheatsheet</h1>
            <a href="https://interpoldb.sd-lab.nl/">https://interpoldb.sd-lab.nl/</a>
            <br>
            <br>
            <ascii-line character="🫥"/>
            
            
            <div class="table-container">
                <div>
                    <h3>verdachte_personen</h3>
                    ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐
                    <table>
                        <tr>
                            <td>persoonID</td>
                            <td>achternaam</td>
                            <td>voorletters</td>
                            <td>geslacht</td>
                            <td>leeftijd</td>
                            <td>afkorting</td>
                            <td>functie</td>
                            <td>dienstjaren</td>
                            <td>reden</td>
                        </tr>
                    </table>
                    └───────────────────────────────────────────────────────────────────────────────────────────────────┘
                </div>
            </div>

            <br />
            <br />
            
            <ascii-line character="🧑‍🏫"/>
            
            
            <div class="table-container">
                <div>
                    <h3>mentoren</h3>
                    ┌───────────────────────────┐
                    <table>
                        <tr>
                            <td>mentorID</td>
                            <td>klas</td>
                            <td>docentID</td>
                        </tr>
                    </table>
                    └───────────────────────────┘
                </div>
            </div>

            <br />
            <br />
            
            <ascii-line character="🥷"/>
            
            
            <div class="table-container">
                <div>
                    <h3>hobby</h3>
                    ┌────────────────┐
                    <table>
                        <tr>
                            <td>hobbyID</td>
                            <td>hobby</td>
                        </tr>
                    </table>
                    └────────────────┘
                </div>
            </div>

            <br />
            <br />
            
            <ascii-line character="🙇‍♂️"/>
            
            
            <div class="table-container">
                <div>
                    <h3>hobby_per_verdachte</h3>
                    ┌──────────────────────┐
                    <table>
                        <tr>
                            <td>hobbyID</td>
                            <td>verdachteID</td>
                        </tr>
                    </table>
                    └──────────────────────┘
                </div>
            </div>

            <br />
            <br />
            
            <ascii-line character="👻"/>


            <h5>Query hints:</h5>
            <strong>SELECT</strong> &lt;kolomnaam of namen&gt;<br>
            <strong>FROM</strong> &lt;kolomnaam of namen&gt;<br>
            <strong>WHERE</strong> &lt;kolomnaam of namen&gt; <br>

            <h5>More hints:</h5>
            <em>AND</em>, <em>OR</em>, <em>ORDER BY</em>  
            

        </section>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import payloadStore from "@/stores/payload"
import gsap from "gsap"
import asciiLine from "@/components/ascii-line.vue"
import asciiBox from "@/components/ascii-box.vue"
import asciiButton from "@/components/ascii-button.vue"

export default defineComponent ({ 
    name: "homePage",
    components: { 
        asciiLine,
        asciiButton,
        asciiBox,
    },
    props: [],
    setup() {
        const Payload = payloadStore()

        return { Payload }
    },
    data() {
        return {
            confirmMessage: "",
            consoleEvents: [] as Array<string>,
            adminUrl: `${import.meta.env.VITE_PAYLOAD_REST_ENDPOINT.replace("api", "")}`
        }
    },
    head: { 
        title: "Home",
        meta: [
            {
                name: "description",
                content: "Lorem ipsum dolor samet...",
            },
        ]
    },
    mounted() {
        gsap.fromTo(".home-title .right", {
            opacity: 0, 
            x: 24
        }, {
            opacity: 1, 
            x:0, 
            ease: "elastic.out(1, 0.3)",
            duration: 2.4
        })
        gsap.fromTo(".home-description, .divider-line,  .payload-test", {
            opacity: 0, 
            y: 24
        }, {
            opacity: 1, 
            y:0, 
            ease: "circ.out",
            duration: .64,
            stagger: .16
        })
    },
    methods: {
        logout() {
            if (!this.Payload.auth) {
                throw new Error("Missing auth object on Payload store")
            }
            this.Payload.auth.logout()  
        },
        showConfirmMessage(email:string) {
            this.confirmMessage = email
        }
    }
})

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.home {
    min-height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    tr {
        &:before {
            content: " | ";
        }
    }
    
    td {
        
        &:after {
            color: #777;
            content: " | ";
        }

        &:last-child:after {
            color: currentColor;
        }
    }
}
.ascii-line {
    font-size: 32px;
    opacity: 0.24;
}

a {
    font-family: fixedSys;
    color: #555;
    text-decoration: none;
}

.table-container {
    display: flex;
    justify-content: flex-start;
    margin-left: 80px;
}
</style>