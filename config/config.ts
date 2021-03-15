export default {
  title: 'Antd Mobile',
  mode: 'site',
  exportStatic: {},
  hash: true,
  locales: [['zh-CN', '中文'], ['en-US', '英文']],
  favicon: 'https://alitajs.com/assets/img/meta/apple-touch-icon-114x114.png',
  logo: 'https://user-images.githubusercontent.com/11746742/104428726-c2c90300-55bf-11eb-9b84-d52a86050b9a.png',
  // 移动端组件库需要，不需要可删除
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  styles: [
    `
    .am-icon {
      fill: currentColor;
      background-size: cover;
      width: 0.44rem;
      height: 0.44rem;
    }
    `,
  ],
}
