import Vue from 'vue'
import { NuxtContext } from 'nuxt'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?: (ctx: NuxtContext) => Promise<any>;
    fetch?: (ctx: NuxtContext) => Promise<any>;
    layout?: string | ((ctx: NuxtContext) => string);
    middleware?: string | string[];
  }
}
