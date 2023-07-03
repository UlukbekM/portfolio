interface skillInterface {
    name: string,
    icon: JSX.Element,
}

export default function SkillIcon (skill:skillInterface) {
    // console.log(`text-[${skill.color}]`)
    return(<div className="mx-1 my-2 flex justify-between bg-gray-300 dark:bg-gray-900 p-2 rounded-xl">
        <div className={"my-auto mx-1 text-lg"}>
            {skill.icon}
        </div>
        <div className="my-auto mx-1 ">
            {skill.name}
        </div>
    </div>)
}