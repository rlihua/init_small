import fly from './fly'

export const get = (url, params) => {
	return fly.get(url,params)
}

export const post = (url,params) => {
	return fly.post(url,params)
}

export const fullUrl = (doMain) => {
	return '/mobile.php?act=module&name=small_order&do='+doMain
}

export const myGet = (doMain, params) => {
	return fly.get('/mobile.php?act=module&name=small_order&do='+doMain,params)
}

export const myPost = (url,params) => {
	return fly.post('/mobile.php?act=module&name=small_order&do='+doMain,params)
}