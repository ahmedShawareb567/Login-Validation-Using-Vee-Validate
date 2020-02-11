<template>
  <div>
    <nav>
      <div class="navMenu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="viewSec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <transition name="slide">
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>