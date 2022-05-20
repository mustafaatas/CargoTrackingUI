<template>
  <footer class="blog-footer mt-5 p-3">
    <div>
      <p>
        The website built for
        <a href="https://github.com/mustafaatas/CargoTrackingUI"
          >Cargo Tracking</a
        >
        by Mustafa Ataş.
      </p>
    </div>
    <div>
      <a href="https://www.instagram.com/atas_mustafaa1" title="instagram"
        ><i class="fa-brands fa-instagram m-1"></i
      ></a>
      <a href="https://www.youtube.com" title="youtube">
        <i class="fa-brands fa-youtube m-1"></i
      ></a>

      <a
        href="https://www.linkedin.com/in/mustafa-atas-84a898205/"
        title="linkedin"
        ><i class="fa-brands fa-linkedin-in m-1"></i
      ></a>

      <a href="https://github.com/mustafaatas" title="github"
        ><i class="fa-brands fa-github m-1"></i
      ></a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
a {
  color: inherit !important;
}

a:hover {
  text-decoration: none;
}

.blog-footer {
  padding: 0.75rem;
  color: #727272;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0;
}

i {
  cursor: pointer;
}
</style>