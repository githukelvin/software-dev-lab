<template>
  <div>
    <div class="form-group">
      <VForm class="form">
        <div class="fheading">
          <p>Login in here</p>
          <p>
            New here <router-link to="register">Create Account</router-link>
          </p>
        </div>

        <!-- form groups -->
        <div class="form-group">
          <label>Email</label>
          <Field
            type="email"
            placeholder="Enter Email Address"
            name="email"
            autocomplete="off"
          />
          <div class="message">
            <div class="info">
              <ErrorMessage name="email" />
            </div>
          </div>
        </div>

        <!-- Seconf form group -->
        <div class="form-group">
          <label>Password</label>
          <Field
            type="password"
            placeholder="Enter Password"
            name="password"
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
          <button type="submit" class="submitBtn" ref="submitButton"></button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<script setup>
import { Form as VForm, ErrorMessage, Field } from "vee-validate";
</script>

<style lang="scss" scoped></style>
