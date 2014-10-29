import UIKit

func minMax (arr: [Int]) -> (min: Int, max:Int)? {
    if arr.isEmpty {return nil}
    var currentMin = arr[0]
    var currentMax = arr[0]
    
    // for var i = 0;i < arr.count; ++i
    for val in arr
    {
        //if currentMin > arr[i]
        if currentMin > val
        {
            currentMin = val
            //currentMin = arr[i]
        }
            //else if currentMax < arr[i]
        else if currentMax < val
        {
            currentMax = val
            //currentMax = arr[i]
        }
    }
    return (currentMin,currentMax)
}



if let recv = minMax([50,2,-39,0,100,-0,-40,150])
{
    println("min is \(recv.min) and max is \(recv.max)")
}