<template>
  <div id="app">
  <div id="header">
    <div class="content">
      <h1>Where in the world?</h1>
      <div>
        <a  @click="toggleTheme">
          <span v-if="darkMode"> <i class="fas fa-moon"></i> Dark Mode</span>
          <span v-else> <i class="fas fa-sun"> </i> Light Mode</span>
        </a>
      </div>
    </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userTheme: "",
      darkMode: true,
    }
  },
  mounted() {
    const initUserTheme = this.getMediaPreference();
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === 'dark-theme'){
      this.darkMode = false;
    }else{
      this.darkMode = true
    }

    this.setTheme(activeTheme || initUserTheme);
    
  },
  methods : {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },
    toggleTheme() {
      this.darkMode = !this.darkMode
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

*{
  margin: 0;
  padding: 0;
}

span, p, h1, h2, h3, div, a{
  font-family: 'Nunito Sans', sans-serif;
}

a {
  text-decoration: none !important;
  cursor: pointer;
}

:root {
    --background-color-primary: hsl(0, 0%, 98%);    /* (Light Mode Background): hsl(0, 0%, 98%)*/
    --background-color-secondary: hsl(0, 0%, 100%); /* (Light Mode Elements):   hsl(0, 0%, 100%)*/
    --input-background-color: hsl(0, 0%, 52%);      /* (Light Mode Input):      hsl(0, 0%, 52%)*/
    --text-primary-color:hsl(200, 15%, 8%);         /* (Light Mode Text):       hsl(200, 15%, 8%) */
}

:root.dark-theme {
  --background-color-primary: hsl(207, 26%, 17%);   /* (Dark Mode Background): hsl(207, 26%, 17%)*/
  --background-color-secondary: hsl(209, 23%, 22%); /* (Dark Mode Elements):   hsl(209, 23%, 22%)*/
  --input-background-color: hsl(209, 23%, 22%);     /* (Dark Mode Input):      hsl(209, 23%, 22%)*/
  --text-primary-color: hsl(0, 0%, 100%);           /* (Dark Mode Text):       hsl(0, 0%, 100%) */
}

#app {
  height: 100vh;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}

#header {
  background-color: var(--background-color-secondary);
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  text-align: center;
  align-items: center;
  width: 70%;
  height: 80px;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
}
</style>
