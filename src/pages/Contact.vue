<template>
    <div class="mainContact" :class="{mainContactDesk: mq.mPlus}">
        <h2 data-aos="fade-right" data-aos-duration="1500">Contactez-moi !</h2>
        <p data-aos="fade-right" data-aos-duration="1500">
          Pour toute question ou demande n'hésitez pas à me contacter je reviendrais vers vous dans les plus brefs délais.
        </p>
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
            <form @submit.prevent="sendEmail">
                <label>Nom :</label>
                <input 
                    type="text" 
                    v-model="name"
                    name="name"
                    placeholder="Nom"
                    required
                    minlength="3" 
                    maxlength="32"
                >
                <label>Email :</label>
                <input 
                    type="email" 
                    v-model="email"
                    name="email"
                    placeholder="Email"
                    required
                    >
                <label>Message :</label>
                <textarea 
                    name="message"
                    v-model="message"
                    cols="30" rows="5"
                    placeholder="Insérez ici votre demande."
                    minlength="5" 
                    required >
                </textarea>
                
                <input type="submit" value="Envoyez">
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  inject:["mq"],
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_x7f8aoq', 'template_j67aonr', e.target,
        'heWS_1oZkVe8Gh4xC', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error},"mymsg error")
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''

      // Return a success message for the user
      
      alert("Email envoyé avec succès !")

    },
  }
}
</script>

<style lang="scss" scoped>
.mainContact{
    margin-bottom:100px;
    .container {
    display: block;
    margin:50px auto;
    text-align: center;
    border-radius: 5px;
    border:1px solid var(--dark-slate);
    padding: 20px;
    width: 100%;
    }

    label {
    float: left;
    }

    input[type=text], [type=email], textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    }

    input[type=submit] {
    background-color: var(--dark-slate);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all .5s ease;
    }

    input[type=submit]:hover {
    background-color: var(--green);
    }
}
.mainContactDesk{
  .container{
    max-width: 75%;
  }
}
</style>