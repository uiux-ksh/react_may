import Layout from "../common/Layout";
import { useEffect} from 'react';
import axios from 'axios';
function Youtube() {
	const key = 'AIzaSyCzaFu9PHCsjsyZIkQ6rKQvziUF6GNB7PQ';
	const playlist ='PLbihmb3eYRn3diU9UzEYoDDel5KxzZFje';
	const num =5;
	const url=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	useEffect(()=>{
		axios.get(url).then( (json) => {
			console.log(json.data.items);	
		})
	})
	return (
		<Layout title={'유튜브'} name={'Youtube'}><p>Youtube</p></Layout>
	);
}

export default Youtube;