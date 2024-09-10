<!-- 
use the .ascii-box-content for styling the content inside the box. Best way is to style it via the parent component/route that you put this element in.
 -->

 <template>
    <div class="reset-password-container">
        <form class="reset-password" @submit="submitForm">
            <div class="reset-password-field">
                <label for="">{{ $text('component::auth/resetPassword.newPassword') }}</label>
                <input type="password" v-model="password" minlength="6">
            </div>
            <div class="reset-password-field">
                <ascii-button type="submit">
                    {{ $text('component::auth/resetPassword.resetPassword') }}
                </ascii-button>
            </div>
        </form>
        <div class="reset-password-error" v-if="error">
            <p v-html="error.message" />
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import payloadStore from "@/stores/payload"
import asciiButton from "@/components/ascii-button.vue"


export default defineComponent({
    name: "reset-password",
    components: {
        asciiButton
    },
    props: {
        code: {
            type: String,
            required: true,
        },
    },
    setup() {
        const Payload = payloadStore()
        return { Payload }
    },
    data: () => {
        return {
            password: "",
            error: null as null | { message: string },
            errorMessages: {
                unknown: "Unknown server error, please try again later"
            }
            
        }
    },
    methods: {
        submitForm($event: Event) {
            $event.preventDefault()
            this.error = null
            
            if (!this.Payload.auth) {
                throw new Error("Missing auth object on Payload store")
            }

            this.Payload.auth.resetPassword({ paswordForgotCode:this.code, newPassword: this.password })
                .then(() => {

                    this.$emit("resetSuccess")
                })
                .catch((err) => {
                    console.log(err)
                    this.error =  err
                })
        },
    }
})
</script>

<style lang="scss">

</style>
