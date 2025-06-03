import Title from '@/components/ui/title'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const commentData = [
    {
        id: 1,
        src: "/images/blog/comment-author1-1.jpg",
        name: "Devon Lane",
        date: "28 April 2024",
        comment: `As the world continues to fight COVID-19 some property owners are searching
        for way they can improve the Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci velit, sed Neque porro. security of their buildings.`,
        replyComment: [
            {
                id: 1,
                src: "/images/blog/comment-author1-2.jpg",
                name: "Jenny Wilson",
                date: "28 April 2024",
                comment: `As the world continues to fight COVID-19 some property owners are searching
            for way they can improve the Neque porro quisquam est, `,
            }
        ]
    },
    {
        id: 2,
        src: "/images/blog/comment-author1-3.jpg",
        name: "Courtney Henry",
        date: "28 April 2024",
        comment: `As the world continues to fight COVID-19 some property owners are searching
        for way they can improve the Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci velit, sed Neque porro. security of their buildings.`,
        replyComment: [

        ]
    },

]
const Comments = () => {
    return (
        <div className='pt-12.5'>
            <div>
                <Title size={"4xl"}>Comments (5)</Title>
                <div className='pt-8'>
                    {
                        commentData.map(({ comment, date, id, name, replyComment, src }) => {
                            return (
                                <div key={id}>
                                    <CommentCard comment={comment} date={date} name={name} src={src} id={id} parentComment={true} />
                                    {replyComment.length ? replyComment.map(({ comment, date, id, name, src }) => <CommentCard key={id} comment={comment} date={date} name={name} src={src} replyStyle={"lg:ml-32 ml-16 pt-10"} />) : ""}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments


const CommentCard = ({ src, name, date, comment, replyStyle, id, parentComment }) => {
    return (
        <div className={cn(`flex md:gap-7.5 gap-3 ${replyStyle} ${id !== 1 && parentComment ? "mt-12.5" : ""}`)}>
            <Link href={""} className='md:min-w-25 min-w-16'>
                <Image src={src} width={100} height={100} alt='Devon Lane' className='rounded-lg' />
            </Link>
            <div>
                <div className='md:pb-[15px] pb-2.5'>
                    <Link href={""} className='font-semibold text-muted-foreground block'>{name}</Link>
                    <small>{date}</small>
                </div>
                <p className='lg:text-lg text-base'>{comment}</p>
                <span className='font-bold'>Reply</span>
            </div>
        </div>
    )
}