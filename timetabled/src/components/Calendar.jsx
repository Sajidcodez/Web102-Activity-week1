import Event from "./Event";

const Calendar = () => {

    return (
        <div className="calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>   
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks ☕️' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue'/>
                    </tr>
                    <tr>
                    <td className="tuesday">11 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Gym 🏋️' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>     
                    </tr>
                    <tr>
                        <td className="wednesday">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Team Meeting 👥' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="thursday">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch w/ Sara 🥗' color='pink' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <td className="friday">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>   
                    <tr>
                    <td className="saturday">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> 
                    <tr>
                    <td>4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <td>5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>             
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;