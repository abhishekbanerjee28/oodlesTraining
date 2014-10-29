

import UIKit

class ViewController2: UIViewController {

    @IBOutlet var vc2display: UITextField!
    var first: String!
    var second: String!
    override func viewDidLoad() {
        super.viewDidLoad()

        vc2display.text = first + " " + second
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
   
   
}
