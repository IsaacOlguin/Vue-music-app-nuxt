import musicService from './music';

const trackService = {
    search: (q) => {
        const type = 'track';

        return musicService.get(
            '/search', 
            {
                params: {
                    q,
                    type
                }
            }
        )
        .then(res => res.data)
        .catch(error => {
            console.log(error);
        })
    },
    searchById: function(id) {
        console.log(id);
        return musicService.get(`/tracks/${id}`)
            .then(res => {
                return res.data
            })
            .catch(error => {
                console.log("Ocurrio un error")
                console.log(error);
            });
    }
};

export default trackService;