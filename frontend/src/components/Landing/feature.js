import React from 'react'
import {ReactComponent as Padlock} from "../../assets/Padlock_perspective_matte.svg"
import {ReactComponent as Stats} from "../../assets/3.svg"
import {ReactComponent as Award} from "../../assets/4.svg"
function Feature() {
  return (
    <div>
        <section class="bg-transparent text-white dark:bg-white-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white-900 dark:text-white">Ежедневно заполняя повышай свой уровень </h2>
          <p class="text-white-500 sm:text-xl dark:text-white-400">Никогда не хватало мотивации, чтобы постоянно записывать затраты? Получил зарплату и думаешь куда она уходит? AQSHA позволит, наконец, совместить финансовую грамотность и удовольствие.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex text-center justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Padlock/>              </div>
              <p class="text-white-500 dark:text-white-400">
              Отслеживайте свои подписки                 </p></div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Stats/>
              </div>
              <p class="text-white-500 dark:text-white-400">Повышай свою финансовую грамотность</p>
          </div>
    
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Award/>

              </div>
              <p class="text-white-500 dark:text-white-400">Получайте награды за последовательность</p>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Feature