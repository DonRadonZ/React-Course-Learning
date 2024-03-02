import { type PropsWithChildren } from "react";

// interface CourseGoalProps  {
//     title: string;
//     children: ReactNode
// }

type CourseGoalChildrenProps = PropsWithChildren<{title: string}>;


export default function CourseGoal({title,children}: CourseGoalChildrenProps) {

    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
        </article>
    )
}

// const CourseGoal: FC<CourseGoalChildrenProps> = ({title, children}) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }
// export default CourseGoal;

