import Link from 'next/link'
export default function Timeline(){

    return (
    <>
        <h1>This is the timeline</h1>
        <Link href='/'><a>Home</a></Link>
        <style jsx>{`
        h1{
            font-size: 36px;
            color: red;
        }
        `}</style>
    </>
    )
}