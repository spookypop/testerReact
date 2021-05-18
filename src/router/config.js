//Loadable插件需使用Loading
import Loadable from 'react-loadable'
import Loading from "../components/Loading/index"

//定义路由
global.Main = Loadable({
	loader: () => import('../pages/index'),
	loading: Loading,
});

//表单
global.sprintlist = Loadable({
	loader: () => import('../pages/SprintList/index'),
	loading: Loading,
});