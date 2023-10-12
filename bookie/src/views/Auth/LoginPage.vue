<template>
  <div>
    <div class="form-group">
      <VForm class="form" :validation-schema="login">
        <div class="fheading">
          <h2>Login in here</h2>
          <p>
            New here <router-link to="register">Create Account ?</router-link>
          </p>
        </div>

        <!-- input groups -->
        <div class="input-group">
          <label>Email</label>
          <Field
            type="email"
            placeholder="Enter Email Address"
            name="email"
            autocomplete="off"
            class="input-field"
          />
          <div class="message">
            <div class="info">
              <ErrorMessage name="email" />
            </div>
          </div>
        </div>

        <!-- Seconf input group -->
        <div class="input-group">
          <div class="labels">
            <label>Password</label>
            <router-link to="/forgot">Forgot Password</router-link>
          </div>
          <Field
            type="password"
            placeholder="Enter Password"
            name="password"
            class="input-field"
            autocomplete="off"
          />
          <div class="message">
            <div class="info">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>
        <!-- Actions -->
        <div class="btns">
          <button type="submit" class="submitBtn" ref="submitButton">
            Login
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<script setup>
import { Form as VForm, ErrorMessage, Field } from "vee-validate";
import * as Yup from "yup";

const login = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
});
</script>

<style lang="scss" scoped></style>
