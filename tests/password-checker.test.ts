import {calculatePasswordStrength} from "../src/password-calculation";

// basic length strength

describe( 'Test password strength', () =>{

    test('Return Very Weak if password is < 8 characters which contains only one kind of it',() =>{
expect(calculatePasswordStrength('6578938')).toBe("Very Weak")
    })

    test('Return Weak if password is >= 12 characters which contains only one kind of it',() =>{
        expect(calculatePasswordStrength('@@@@@@@@@@@@')).toBe("Weak")
    })

    test('Return Very Weak if password is >= 8 but < 12 characters which contains only one kind of it',() =>{
        expect(calculatePasswordStrength('rtsdghhgh')).toBe("Very Weak")
    })

    test('Return Very Weak if password is < 8 characters which contains 2 kind of it',() => {
        expect(calculatePasswordStrength('sdf890')).toBe("Very Weak")
    })

    test('Return Weak if password is >= 8 and < 12 characters which contains 2 kind of it',() => {
        expect(calculatePasswordStrength('sdf890fss')).toBe("Weak")
    })

    test('Return Moderate if password  >= 12 characters which contains 2 kind of it',() => {
        expect(calculatePasswordStrength('sdf890fssdddf')).toBe("Moderate")
    })

    test('Return Weak if password is < 8 characters which contains 3 kind of it',() =>{
            expect(calculatePasswordStrength('66bbUU8')).toBe("Weak")
    })

    test('Return Moderate if password is >= 8 but < 12 characters which contains 3 kind of it',() =>{
        expect(calculatePasswordStrength('66bbUU8t')).toBe("Moderate")
    })

    test('Return Moderate if password is < 8 characters which contains 4 kind of it',() =>{
        expect(calculatePasswordStrength('66bUU8@')).toBe("Moderate")
    })

    test('Return Strong if password is >= 8 but < 12 characters which contains 4 kind of it',() =>{
        expect(calculatePasswordStrength('66bUU8@@')).toBe("Strong")
    })

    test('Return Strong if password is >= 12 characters which contains 3 kind of it',() =>{
        expect(calculatePasswordStrength('66bbUU8t6fFF')).toBe("Strong")
    })

    test('Return Strong if password is >= 12 characters which contains 4 kind of it',() =>{
        expect(calculatePasswordStrength('66bbUU8t6fFF@')).toBe("Strong")
    })
})

