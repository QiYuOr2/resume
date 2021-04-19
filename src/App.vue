<template>
  <div class="px-10 py-4 text-primary">
    <resume-header :resume="resume" />
    <education :resume="resume" />
    <project v-if="resume.project" :resume="resume" />
    <certificate v-if="resume.certificate" :resume="resume" />
    <skill :resume="resume" />
    <other v-if="resume.other" :resume="resume" />
    <thank :resume="resume" />
    <change-data :raw="raw" @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Certificate from './components/Certificate.vue';
import ChangeData from './components/ChangeData.vue';
import Education from './components/Education.vue';
import Header from './components/Header.vue';
import Other from './components/Other.vue';
import Project from './components/Project.vue';
import Skill from './components/Skill.vue';
import Thank from './components/Thank.vue';

export default defineComponent({
  name: 'App',
  components: {
    Education,
    Project,
    Skill,
    Thank,
    Certificate,
    Other,
    ChangeData,
    [Header.name]: Header,
  },
  setup() {
    const raw = ref(
      JSON.stringify({
        name: 'xmy6364',
        contact: [
          {
            label: '邮箱',
            value: 'tuzilow@gmail.com',
          },
          {
            label: '电话',
            value: '12345678911',
          },
        ],
        info: [
          { label: 'GitHub', value: 'https://github.com/xmy6364' },
          { label: '博客', value: 'https://xmy6364.github.io/' },
        ],
        education: [
          {
            school: '安阳师范学院',
            location: '河南，安阳',
            type: '本科',
            major: '软件工程',
            GPA: '3.5',
            other: '',
            time: {
              start: '2018年9月',
              end: '2022年6月',
            },
          },
        ],
        project: [
          {
            title: '在线考试系统',
            keywords: '服务端',
            time: {
              start: '2018年9月',
              end: '2022年6月',
            },
            skills: ['.Net', 'Vue', 'ElementUI'],
            link: 'https://github.com/xmy6364/exam-system',
            abstract: '一个方便、快捷的在线考试系统',
            kira: ['项目已在安阳市人民警察学校内部部署上线', '没啥闪光点'],
          },
          {
            title: '电竞酒店管理平台',
            keywords: '小程序，服务端',
            time: {
              start: '2018年9月',
              end: '2022年6月',
            },
            skills: ['React', 'TypeScript', 'Ant Design', 'Nest.js'],
            link: 'https://github.com/B-A-R-team/ehotel-server',
            abstract:
              '项目是一套完整的从酒店后台管理到小程序端选择、预订房间的产品',
            kira: [
              '负责项目的整体规划以及前端部分模块、小程序部分模块和服务端的搭建',
              '没啥闪光点',
            ],
          },
          {
            title: 'bar-ui',
            keywords: 'Vue组件库，开源项目',
            time: {
              start: '2018年9月',
              end: '2022年6月',
            },
            skills: ['Vue', 'Rollup', 'TypeScript'],
            link: 'https://github.com/xmy6364/bar-ui',
            abstract: '一套风格简单的Vue3.0组件库',
            kira: ['使用rollup、npm脚本构件工作流，压缩打包分发至npm'],
          },
          {
            title: 'CoinRailgun',
            keywords: '博客生成器，开源项目',
            time: {
              start: '2018年9月',
              end: '2022年6月',
            },
            skills: ['Vue', 'Rollup', 'TypeScript'],
            link: 'https://github.com/xmy6364/CoinRailgun',
            abstract: '基于nodejs的静态博客生成器',
            kira: [
              '使用art-template进行博客主题模板开发，使用CSS3制作动画',
              '将通用功能抽取为可配置项，并为其编写文档',
            ],
          },
        ],
        skill: [
          '熟悉HTML、CSS、 JavaScript/TypeScript的基础知识， 熟悉ES6常用的语法和API，经常在项目中运用。',
          '熟悉Vue,js，能够结合Vuex、Vue Router、UI库等扩 展技能开发页面，能够使用Vue开发组件库。',
          '熟悉React, 能够结合React Router、 Redux、 UI库等扩展技能开发页面，了解React Native并且结合React Navigation和WebView开发过Demo。',
          '熟悉Node.js，能够结合Web框架开发服务端应用，能够结合Commander.js开发命令行应用。',
          '了解Webpack,能够结合文档搭建出Vue.js的开发环境，能够使用webpack搭建多页面开发环境',
        ],
        certificate: ['2019年和2020年国家励志奖学金，安阳师范学院'],
      })
    );
    const resume = ref(JSON.parse(raw.value));

    const handleChange = (value: string) => {
      resume.value = JSON.parse(value);
    };

    return { resume, raw, handleChange };
  },
});
</script>
