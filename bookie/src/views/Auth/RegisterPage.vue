<template>
  <div>
    <div class="form-group">
      <VForm class="form" :validation-schema="register">
        <div class="fheading">
          <h2>Create Account</h2>
          <p>
            Already have an account ?
            <router-link to="login"> Login Here</router-link>
          </p>
        </div>
        <div class="combined-group">
          <!-- begin username input -->
          <div class="input-group">
            <label>UserName</label>
            <Field
              type="text"
              name="username"
              class="input-field"
              autocomplete="off"
              placeholder="Enter Username"
            />
            <div class="message">
              <div class="info">
                <ErrorMessage name="username" />
              </div>
            </div>
          </div>
          <!-- end username input -->
          <!-- Begin full names -->
          <div class="input-group">
            <label>Fullnames</label>
            <Field
              type="text"
              name="fullnames"
              class="input-field"
              autocomplete="off"
              placeholder="Enter Fullnames"
            />
            <div class="message">
              <div class="info">
                <ErrorMessage name="fullnames" />
              </div>
            </div>
          </div>
          <!-- end full names -->
        </div>
        <div class="combined-group">
          <!-- Begin Email Address -->
          <div class="input-group">
            <label>Email</label>
            <Field
              type="email"
              name="email"
              class="input-field"
              autocomplete="off"
              placeholder="Enter Email address"
            />
            <div class="message">
              <div class="info">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <!-- end email Address -->
          <!-- Begin Phone Number -->
          <div class="input-group">
            <label>Phone Number</label>
            <Field
              type="text"
              name="phone"
              class="input-field"
              autocomplete="off"
              placeholder="+2547XXXXXXX"
            />
            <div class="message">
              <div class="info">
                <ErrorMessage name="phone" />
              </div>
            </div>
          </div>
          <!-- End phone number -->
        </div>
        <!-- Begin Password -->
        <div class="input-group">
          <label>Password</label>
          <Field
            type="password"
            name="password"
            class="input-field pas"
            autocomplete="off"
            ref="pass"
            id="pass"
            placeholder="Enter Password"
          />
          <div class="message">
            <div class="info">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>
        <!-- End password -->
        <!-- Begin ConfirmPassword -->
        <div class="input-group">
          <label>Confirm Password</label>
          <Field
            type="password"
            name="confirm_Password"
            class="input-field pas"
            ref="pajss"
            id="passp"
            autocomplete="off"
            placeholder="Enter Confirm Password"
          />
          <div class="message">
            <div class="info">
              <ErrorMessage name="confirm_Password" />
            </div>
          </div>
        </div>
        <!-- End Confirmpassword -->
        <!-- Show password -->
        <div class="show">
          <input
            @click="handleShow"
            type="checkbox"
            class="custom-checkbox"
            name="check"
            id="check"
          />
          <label for="check">Show password</label>
        </div>
        <!-- Actions -->
        <div class="btns">
          <button type="submit" class="submitBtn" ref="submitButton">
            Register
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>
<script setup>
import { Form as VForm, ErrorMessage, Field } from "vee-validate";
import * as Yup from "yup";
import { onMounted, ref } from "vue";
const register = Yup.object().shape({
  username: Yup.string().required().label("UserName"),
  fullnames: Yup.string().required().label("Fullnames"),
  email: Yup.string().email().min(6).required().label("Email"),
  phone: Yup.string()
    .max(13)
    .required()
    .matches(/^[+254]+(1|7)\d{8}/g, "Enter a valid Number +2547XXXXXXX")
    .label("Phone Number"),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Password: 8+ chars, 1 uppercase, 1 lowercase, 1 number, special chars allowed."
    )
    .required()
    .label("Password"),
  confirm_Password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .label("Confirm Password"),
});
let input = ref();
onMounted(() => {
  input = document.querySelectorAll(".pas");
  // handleShow(pass);
});
const handleShow = () => {
  console.log(input);
  // eslint-disable-next-line vue/no-ref-as-operand
  input.forEach((item) => {
    // Get the current type attribute value
    const currentType = item.getAttribute("type");

    // Check the current type and change it
    if (currentType === "text") {
      item.setAttribute("type", "password"); // Change to password type
    } else {
      item.setAttribute("type", "text"); // Change back to text type
    }
  });
};
</script>
<style lang="scss" scoped>
.combined-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  .input-field {
    width: 100%;
  }
}
.pas {
  width: 30vw;
}
.show {
  margin-top: 0.5em;
}
.btns {
  margin-bottom: 1em;
  .submitBtn {
    width: 100%;
  }
}
</style>
