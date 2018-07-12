package com.twu.BibliotecaApp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "/api")
public class UserController {

    @PostMapping(value = "/users")
    ResponseEntity login(@RequestBody Map<String, String> userData) throws Exception {

        String email = userData.get("email");
        String password = userData.get("password");
        Map<String, String> result = new HashMap<>();
        if (email.equals("15829258737@163.com") && password != null) {
            result.put("email", email);
            result.put("name", "QingQingDou");
            result.put("remember", "true");
            result.put("age", "20");
            result.put("gender", "female");
            result.put("address", "西安市长安区");
            result.put("phone", "17389374542");
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
    }
}
