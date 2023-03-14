<template>
  <main class="card">
    <header class="card-header">
      <h1 class="card-header__title">Your Result</h1>

      <div class="card-result">
        <span class="card-result__value">76</span>
        <span class="card-result__total">of 100</span>
      </div>

      <h2 class="card-header__subtitle">Great</h2>

      <p class="card-header__text">You scored higher than 65% of the people who have taken these tests</p>
    </header>

    <section class="card-summary">
      <h3 class="card-summary__title">Summary</h3>

      <ul class="summary-list">
        <li class="summary-list__item" v-for="summaryItem in summary">
          <img :src="loadImage(summaryItem.icon)" alt="">
          <p>{{ summaryItem.category }}</p>
          <meter max="100" :value="summaryItem.score" class="summary-list__meter appeareance-none">{{ summaryItem.score }} / 100</meter>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang='ts' setup>
  import type { SummaryItem } from '@/types/SummaryItem'

  interface Props {
    summary: SummaryItem[]
  }

  defineProps<Props>()

  const loadImage = (source: string) => {
    // return source

    return new URL(source, import.meta.url).href;

    // const module = await import(/* @vite-ignore */ source)
    // return module.default.replace(/^\/@fs/, '')
  }
</script>

<style lang="scss">
.card {
  text-align: center;
  background: white;

  &-result {
    @include circle(8);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-align: center;
    margin: 1.5em auto;
    background: linear-gradient(180deg, var(--violet-blue), var(--persian-blue));

    &__value {
      @include font-normal(900);
      margin: 0.5em 0 0 0;
      font-weight: 900;
    }

    &__total {
      opacity: 0.75;
      color: var(--dark-grey-blue);
      font-weight: 600;
    }
  }

  &-header {
    padding: 2.25rem 3rem;
    background: linear-gradient(180deg, var(--light-slate-blue), var(--light-royal-blue));
    border-radius: 1.5rem;
    color: white;

    &__title {
      @include font-normal(150);
      color: var(--dark-grey-blue);
    }

    &__subtitle {
      @include font-normal(300);
      margin: 0 0 0.75rem 0;
    }

    &__text {
      color: var(--dark-grey-blue);
    }
  }

  &-summary {
    padding: 1.75rem;
    text-align: left;

    &__title {
      margin: 0 0 1.5rem 0;
      font-weight: 900;
      color: var(--light-lavender);
    }
  }
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__item {
    display: flex;
    padding: 1rem;
    border-radius: 1rem;
    background: tomato;
    color: white;
    font-weight: 600;
  }

  &__icon {

  }

  &__meter {
    @include font-normal;

    width: auto;
    margin-left: auto;
  }
}
</style>
