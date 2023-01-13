import React from "react"
import { useFetch } from "react-async"
import { useAsync } from "react-async"

/*async function getCommitsData() {
    const res = await fetch("https://api.github.com/repos/mikaelhd/IGE511-TP1-HUBM2601/commits?author=mikael.hubert-deschamps@usherbrooke.ca",
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })/!*.then((response) => response.json())
        .then((data) => commitList = data);*!/

    if (!res.ok) {
        throw new Error("oops");
    }

    var temp = res.json();
    var commitAuthor = JSON.parse(temp).commit.author

    /!*return res.json();*!/
    return commitAuthor[0].toString();
}*/

const loadCommits = async (/*{ user }, { repo }, { author }*/) => {
    const res = await fetch(`https://api.github.com/repos/mikaelhd/IGE511-TP1-HUBM2601/commits?author=mikael.hubert-deschamps@usherbrooke.ca`);
    if (!res.ok) throw new Error(res.statusText);

    const temp = res.json()
    console.log(temp)
    return temp
}


const Commits = () => {
    const { data, error } = useFetch(`https://api.github.com/repos/mikaelhd/IGE511-TP1-HUBM2601/commits?author=mikael.hubert-deschamps@usherbrooke.ca`, {
        headers: { accept: "application/json" },
    })
    if (error) return error.message
    if (data) {
        const listCommits = data.map((commitMessage) =>
            <li><code>{commitMessage.commit.message},
                committed by: {commitMessage.commit.author.name},
                date: {new Date(commitMessage.commit.author.date).toLocaleDateString('en-CA')}</code></li>);

        return (<ol className="changelog"><b>Commit list:</b>
                {listCommits}</ol>)}
    return null
}


export default function ChangeLog() {
    return <Commits />

}