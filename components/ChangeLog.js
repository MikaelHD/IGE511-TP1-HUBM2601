import React from "react"
import { useFetch } from "react-async"
const Commits = () => {
    const { data, error } = useFetch(`https://api.github.com/repos/mikaelhd/IGE511-TP1-HUBM2601/commits?author=mikael.hubert-deschamps@usherbrooke.ca`, {
        headers: { accept: "application/json" },
    })
    if (error) return error.message
    if (data) {
        let listCommits = data.reverse().map((commitMessage) =>
            <li><code>{commitMessage.commit.message},
                date: {new Date(commitMessage.commit.author.date).toLocaleDateString('en-CA')}</code></li>)
            .slice(4);

        return (<div>
            <b>Commit list:</b>
            <ol className="changelog">
                {listCommits}</ol>
        </div>)}
    return null
}

export default function ChangeLog() {
    return <Commits />

}