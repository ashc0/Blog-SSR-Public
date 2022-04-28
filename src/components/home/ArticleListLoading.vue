<template>
  <ul>
      <li v-for="(item, idx) in 2" :key="idx">
        <div class="cover" style="height: 21vw"></div>
        <div class="text">
          <div class="title">
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 25px;
                width: 30%;
              "
            ></span>
          </div>
          <div class="updated">
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 0.8vw;
                width: 20%;
              "
            ></span>
          </div>
          <div class="desc">
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 16px;
                width: 95%;
              "
            ></span>
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 16px;
                width: 50%;
              "
            ></span>
          </div>
        </div>
      </li>
    </ul>
</template>