import { expect, browser, $ } from '@wdio/globals'
import accountData from '../../data/account.json'

describe('My Login application', () => {
    beforeEach(async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
    })

    accountData.data.forEach((element) => {
        var username = element.username
        var password = element.password
        var result = element.result
        it(`should login with ${username} and ${password}`, async () => {
            await $('#username').setValue(`${username}`)
            await $('#password').setValue(`${password}`)
            await $('button[type="submit"]').click()
            await expect($('#flash')).toBeExisting()
            await expect($('#flash')).toHaveText(expect.stringContaining(`${result}`))
        })
    });
})

