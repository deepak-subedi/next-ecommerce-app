import { useRouter } from 'next/router';

const Name = () => {
    const router = useRouter();
    const { name } = router.query;

    return <p>Hello { name }, you are welcome!</p>
}

export default Name;