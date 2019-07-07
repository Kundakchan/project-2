<template>
  <div id="app">
    <header class="header grid g-center">
      <div class="header__content grid content t-upp">
        <div class="logo">
          <h1>minimø</h1>
        </div>
        <nav class="nav flex f-vcenter">
          <a href="#" class="nav__item">lifestyle</a>
          <a href="#" class="nav__item">photodiary</a>
          <a href="#" class="nav__item">music</a>
          <a href="#" class="nav__item">travel</a>
        </nav>
        <button class="btn drawer" @click.prevent="drawerTriger" :class="{'hiden': drawerStatus}"></button>
        <div class="left-menu" :class="{'display-default': drawerStatus}">
          <div class="tab">
            <button class="btn close" @click.prevent="drawerTriger"></button>
          </div>
          <nav class="left-menu__nav grid g-center">
            <a href="" class="left-menu__item">home</a>
            <a href="" class="left-menu__item">lifestyle</a>
            <a href="" class="left-menu__item">photodiary</a>
            <a href="" class="left-menu__item">music</a>
            <a href="" class="left-menu__item">travel</a>
          </nav>
        </div>
      </div>
    </header>
    <main class="main grid g-center">
      <section class="section content">
        <img src="@/assets/slide/img-1.png" alt="banner__img" class="banner">
      </section>
      <section class="section content-sm">
        <article class="article">
          <div class="article__title">
            <a href="#" class="tag t-upp">photodiary</a>
          </div>
          <div class="article__body">
            <h2 class="title-2">The perfect weekend getaway</h2>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
          <div class="article__footer">
            <a href="#" class="tag t-upp">Leave a comment</a>
          </div>
        </article>
      </section>
      <section class="section content-sm grid card-container">
        <article class="article">
          <div class="article__title grid">
            <img src="@/assets/homepage/post/img-1.png" alt="img" class="img">
            <a href="#" class="tag t-upp">Lifestyle</a>
          </div>
          <div class="article__body">
            <h1 class="title-2">More than just a music festival</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </article>
        <article class="article">
          <div class="article__title grid">
            <img src="@/assets/homepage/post/img-2.png" alt="img" class="img">
            <a href="#" class="tag t-upp">lifestyle</a>
          </div>
          <div class="article__body">
            <h1 class="title-2">Life tastes better with coffee</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </article>
        <article class="article">
          <div class="article__title grid">
            <img src="@/assets/homepage/post/img-3.png" alt="img" class="img">
            <a href="#" class="tag t-upp">photodiary</a>
          </div>
          <div class="article__body">
            <h1 class="title-2">American dream</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </article>
        <article class="article">
          <div class="article__title grid">
            <img src="@/assets/homepage/post/img-4.png" alt="img" class="img">
            <a href="#" class="tag t-upp">photodiary</a>
          </div>
          <div class="article__body">
            <h1 class="title-2">A day exploring the Alps</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </article>
      </section>
      <section class="section content-full bg-form grid g-center">
        <div class="content-sm grid g-center">
          <h2 class="title-form">Sign up for our newsletter!</h2>
          <form action="#" class="form__group grid">
            <input class="input from__input-costom" type="email" placeholder="Enter a valid email address">
            <button class="btn form__btn-costom" type="submit"></button>
          </form>
        </div>
      </section>
      <section class="section content-sm grid card-container">
        <article class="article">
          <div class="article__title grid">
            <img src="@/assets/homepage/post/img-5.png" alt="img" class="img">
            <a href="#" class="tag t-upp">Lifestyle</a>
          </div>
          <div class="article__body">
            <h1 class="title-2">More than just a music festival</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </article>
        <article class="article">
          <div class="article__title grid">
            <img src="@/assets/homepage/post/img-6.png" alt="img" class="img">
            <a href="#" class="tag t-upp">lifestyle</a>
          </div>
          <div class="article__body">
            <h1 class="title-2">Life tastes better with coffee</h1>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </article>
      </section>
      <section class="section content-sm grid g-center">
        <button class="btn btn__load">Load more</button>
      </section>
    </main>
    <footer class="footer grid g-center bg-footer">
      <div class="grid content">
        <div class="flex between footer__content f-vcenter">
          <div class="footer__left grid">
            <span>Terms and conditions</span>
            <span>Privacy</span>
          </div>
          <div class="footer__right flex ">
            <span>Follow</span>
            <a class="follow" href="#">
              <img src="@/assets/footer/facebook.png" alt="img">
            </a>
            <a class="follow twitter" href="#">
              <img src="@/assets/footer/twitter.png" alt="img">
            </a>
            <a class="follow" href="#">
              <img src="@/assets/footer/instagram.png" alt="img">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawerStatus: false
    }
  },
  methods: {
    drawerTriger () {
      this.drawerStatus = !this.drawerStatus
    }
  }
}
</script>

<style lang="scss">

</style>
