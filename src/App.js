//common
import Header from './component/common/Header';
import Footer from './component/common/Footer';

//main
import Visual from './component/main/Visual';
import Content from './component/main/Content';

//sub
import Department from './component/sub/Department';
import Community from './component/sub/Community';
import Gallery from './component/sub/Gallery';
import Youtube from './component/sub/Youtube';
import Location from './component/sub/Location';
import Join from './component/sub/Join';
import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}
export default App;
//SSR
//페이지 이동시 HTML페이지 요청
//장점 초기 로딩속도가 빠르다 검색엔진 최적화
//단점 페이지이동시,같은페이지안에서 동적으로 바뀔떄마다 사용성 낮음

//CSR
//초기에 화먄에 출력된 모든 데이터를 chunk단위로 모두 불러옴
//장점 -같은페이지안에서 서로 다른 컨텐츠를 실시간으로 변경하면서 출력하므로 사용성 낮음
//단점 - 초기로딩속도가느림 ,검섹엔진 비최적화 