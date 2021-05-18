/*全局配置*/
//全局样式
import './App.css';
//全局路由文件
export * from './router/config';
//接口api
export * from './utils/globalAPI'

//临时变量
global.menus = [
	{
		title: '首页',
		icon: 'page',
		key: '/'
	},
	{
		title: '迭代列表',
		icon: 'laptop',
		key: '/pages/SprintList',
	},
	{
		title: '测试用例',
		icon: 'laptop',
		key: '/testcaseList',
		subs: [
			{
				title: '新增用例',
				icon: 'laptop',
				key: '/test/form',
			},
			{
				title: '测试用例管理',
				icon: 'laptop',
				key: '/testcaseList',
			},
		],
	}
]