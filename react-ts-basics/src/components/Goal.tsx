import { FC, PropsWithChildren } from "react";

type GoalTypes = PropsWithChildren<{ title: string }>;

export default function Goal({ title, children }: GoalTypes) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

// const Goal: FC<GoalTypes> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default Goal;
