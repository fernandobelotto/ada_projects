const user1 = {
    id: '1234',
    name: 'Renata',
    age: 32
}
export let users = [user1]

export async function getUserById(req, res) {
    const user = users.find((user)=> user.id === req.params.id)

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
    }

    res.json(user)
}

export async function getUsers(req, res) {

    return res.json(users)
}

export async function createUser(req, res) {

    users.push(req.body)
    res.json({ status: 'success' })
}

export async function deleteUser(req, res) {

    const deleted = users.find((user) => user.id === req.params.id)
    const newUsers = users.filter((user)=> user.id !== req.params.id)

    users = [...newUsers]

    res.json(deleted)
}