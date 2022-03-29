const deleteOne = async (_, response) => {
    try{
        await response.user.remove();
        response.json({ message: 'User deleted' });
    }catch(error){
        response.status(500).json({ message: error.message });
    }
}

module.exports = deleteOne;