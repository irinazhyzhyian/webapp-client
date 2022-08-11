export class AccreditationMainDocs {
    constructor(response) {
        this.data = {
            NAZIAVOresult: response.data.find(el => el.type === 'NAZIAVOresult'),
            certificate: response.data.find(el => el.type === 'certificate'),
            zvit: response.data.find(el => el.type === 'zvit'),
            selfesteem: response.data.find(el => el.type === 'selfesteem'),
            gerResult: response.data.find(el => el.type === 'gerResult'),
        }
    }
}