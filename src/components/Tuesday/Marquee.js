import React, {Component} from 'react';

class Marquee extends Component {
    render() {
        return (
            <div className="marquee">
                <div className="marquee__box">
                    <table className="marquee__table">
                        <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
                            </tr>
                            <tr>
                                <td>16</td><td></td><td></td><td></td><td>6</td>
                            </tr>
                            <tr>
                                <td>15</td><td></td><td></td><td></td><td>7</td>
                            </tr>
                            <tr>
                                <td>14</td><td></td><td></td><td></td><td>8</td>
                            </tr>
                            <tr>
                                <td>13</td><td>12</td><td>11</td><td>10</td><td>9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Marquee;