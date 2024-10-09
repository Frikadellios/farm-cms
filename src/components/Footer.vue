<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container border-primary border-b hero px-10 mx-auto py-24 sm:py-32"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <a
            href="#"
            class="flex font-bold items-center"
          >
            <ChevronsDown
              class="bg-gradient-to-tr from-primary via-primary/70 to-neon-cyan rounded-lg w-9 h-9 mr-2 border text-white"
            />

            <h4 class="text-2xl text-primary">Farm CMS</h4>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-neon-pink text-lg">Contact</h3>
          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-neon-yellow text-lg">Platforms</h3>
          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              iOS
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Android
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Web
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-neon-lime text-lg">Help</h3>
          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Contact Us
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              FAQ
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Feedback
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-neon-cyan text-lg">Socials</h3>
          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Twitch
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 font-bold hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <p class="">
          &copy; 2024 Designed and developed by
          <a
            target="_blank"
            href="https://github.com/Frikadellios"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Hrihorii Ilin.
          </a>
          Great Thanks to <a target="_blank"
            href="https://github.com/leoMirandaa"
            className="text-neon-cyan transition-all border-neon-cyan hover:border-b-2">Leo Miranda</a>
          for this Great Work and <a target="_blank"
            href="https://shadcn-vue-landing-page.vercel.app/"
            className="text-neon-cyan transition-all border-neon-cyan hover:border-b-2">Original Cool Template!</a>
        </p>
      </section>
    </div>
  </footer>
</template>
