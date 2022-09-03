import { useRouter } from "next/router";

export default function SubAbout() {
	const router = useRouter();
	const id = Number(router.query.id) || null;

	return (
		<>
			<h1>/pages/sub/[id].js</h1>
			<p>Parameter id: {id}</p>
			<a href="/">/pages/index.js</a>
		</>
	);
}
