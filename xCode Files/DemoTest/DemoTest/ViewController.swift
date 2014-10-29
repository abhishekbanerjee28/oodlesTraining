//
//  ViewController.swift
//  DemoTest
//
//  Created by Maneesh Madan on 28/10/14.
//  Copyright (c) 2014 Maneesh Madan. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var fname: UITextField!
    @IBOutlet var display: UITextField!
    @IBOutlet var lname: UITextField!
    
    
    @IBAction func enterButton(sender: AnyObject)
    {
        if (fname.text.isEmpty)
        {
            let alert = UIAlertView ()
            alert.title = "Entert first Name "
            alert.message = "First Name should not be empty"
            alert.addButtonWithTitle("Ok")
            alert.show()
           
            
            
        }
        
        if lname.text.isEmpty
        {
            let alert = UIAlertController (title: "Enter last name", message: "Last Name can't be empty", preferredStyle: UIAlertControllerStyle.Alert)
            
            var action1 =  UIAlertAction(title: "Dismiss", style: UIAlertActionStyle.Default, handler: nil)
            
            /*var action2 = UIAlertAction (title: "OK", style: UIAlertActionStyle.Default, handler: { action in
            println("Ok was tapped")}) */
            //var action2 =  UIAlertAction(title: "OK", style: UIAlertActionStyle.Default, handler: nil)
            
            alert.addAction(action1)
            
            // alert.addAction(action2)
            
            
            self.presentViewController(alert, animated: true, completion: nil)
            
        }
        
       
        
        if ( !lname.text.isEmpty && !fname.text.isEmpty)
        {
        display.text = fname.text + " " +  lname.text
        view.endEditing(true)
        }
        
        
    }
    
   
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject!)
    {
        if (segue.identifier == "next")
        {
            var vc2 =  segue.destinationViewController as ViewController2
            vc2.first = fname.text
            vc2.second = lname.text
        }

    }
}

