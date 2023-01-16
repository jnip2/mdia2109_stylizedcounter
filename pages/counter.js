import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router"
import styles from '../styles/Counter.module.css'
import Head from 'next/head'


export default function Counter() {

    const [number, setNumber] = useState(0)
    const searchParams = useSearchParams()
    const isUser = searchParams.get('username')
    const router = useRouter()

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
            <Head>
                <title>Counter</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.title}>COUNTER PAGE</div>
                <div className={styles.welcome}>Welcome, {isUser} </div>

                <div className={styles.counter}>{number}</div>
                <div className={styles.buttons}>
                    <button className={styles.increment} onClick={() => setNumber(number + 1)}>increment</button>
                    <button className={styles.decrement} onClick={() => setNumber(number - 1)}>decrement</button>
                </div>
            </main>
        </>
    )
}