<template>
  <div class="wrapper">
    <ContentDoc />
  </div>
</template>

<style>


:root {
  --text-color: rgba(0, 0, 0, .85);
  --text-color-sec: rgba(0, 0, 0, 0.65);
  --text-color-other: rgba(0, 0, 0, 0.45);
}

* {
  font-size: 14px;
  color: var(--text-color);
}

body {
  line-height: 1.5;
}

.wrapper {
  padding: 18px 24px;
}

@media print {
  .wrapper {
    padding-top: 0;
  }
}

p {
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
  margin-bottom: 4px;
}


h1 {
  font-size: 24px;
  line-height: 24px;
}


h2,
h2 a {
  font-size: 18px;
  display: flex;
  align-items: center;
}


h2 {
  margin-top: 8px;
  margin-bottom: 4px;
}


h2::after {
  content: "   ";
  box-sizing: border-box;
  flex: 1;
  display: block;
  height: 1px;
  width: 100%;
  margin-left: 16px;
  background-color: var(--text-color-sec);
}

h3,
h3 a {
  font-size: 16px;
}

h3 {
  margin-top: 8px;
}

a {
  text-decoration: none;
}

em {
  color: var(--text-color-other);
  font-size: 12px;
  font-style: normal;
  margin-left: auto;
}

p:has(em) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

p:has(strong) {
  color: var(--text-color-other);
  margin: 4px 0;
}

p:has(strong) strong {
  color: var(--text-color);
}

ul {
  margin: 0;
  margin-left: 20px;

  padding-left: 0;
}
</style>