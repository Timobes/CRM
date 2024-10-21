
class AuthService {
    async name(body) {
        try {
            const test = body

            return test
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new AuthService 
    