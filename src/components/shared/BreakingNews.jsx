import React from 'react';
import Marquee from 'react-fast-marquee';


  const news= [
    {
      "id": 1,
      "title": "Middle East conflict escalates, global oil prices surge. "
    },
    {
      "id": 2,
      "title": "UK inflation rises to 3.3% amid fuel price spike. "
    },
    {
      "id": 3,
      "title": "IMF warns of global energy crisis impact on economies. "
    },
    {
      "id": 4,
      "title": "UN reports worsening humanitarian conditions in conflict zones. "
    }
  ]


const BreakingNews = () => {
    return (
        <div className='container mx-auto bg-base-300 px-5 py-2 pr-40 flex gap-2 text-xl'>
            <button className='btn bg-red-400 text-xl'>Latest News</button>
            <Marquee speed={100} pauseOnHover={true}  className='space-x-6'>
                {
                    news.map((n) => {
                        return(
                            <span className='space-x-6' key={n.id}>{n.title}</span>
                        )
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;