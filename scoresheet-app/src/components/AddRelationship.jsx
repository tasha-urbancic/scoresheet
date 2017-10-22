import React, { Component } from 'react';

export default function AddRelationship(props) {
  return (
    <div>

      <h2>2.) Add rule:</h2>

      <select name="equality" id="equality-dropdown">
          <option>=</option>
          <option>&gt;</option>
          <option>&lt;</option>
      </select>

      <input type="number" placeholder="Number of pieces"/>

      <select name="column-list" id="column-list-dropdown">
          <option>Red coin</option>
          <option>Orange coin</option>
          <option>Yellow coin</option>
          <option>Green card</option>
          <option>Blue card</option>
          <option>Purple card</option>
      </select>

      <button>+(#1)</button> is worth 

      <input type="number" placeholder="How many points?"/>

      <button>+(#2)</button>

      <h4>+(#1) toggles (in place):</h4>

      and <select name="equality" id="equality-dropdown">
              <option>=</option>
              <option>&gt;</option>
              <option>&lt;</option>
          </select>

          <input type="number" placeholder="Number of pieces"/>

          <select name="column-list" id="column-list-dropdown">
                  <option>Red coin</option>
                  <option>Orange coin</option>
                  <option>Yellow coin</option>
                  <option>Green card</option>
                  <option>Blue card</option>
                  <option>Purple card</option>
          </select>

          <button>+(#1)</button>

      <h4>+(#2) toggles (in place):</h4>

          and

          <input type="number" placeholder="Number of pieces"/>

          <select name="column-list" id="column-list-dropdown">
                  <option>Red coin</option>
                  <option>Orange coin</option>
                  <option>Yellow coin</option>
                  <option>Green card</option>
                  <option>Blue card</option>
                  <option>Purple card</option>
          </select>

          <select>
              <option>+</option>
              <option>-</option>
              <option>*</option>
              <option>/</option>
              <option>^</option>
              <option>etc...</option>
          </select>

          <input type="number" placeholder="Number of pieces"/>

          <select name="column-list" id="column-list-dropdown">
                  <option>Red coin</option>
                  <option>Orange coin</option>
                  <option>Yellow coin</option>
                  <option>Green card</option>
                  <option>Blue card</option>
                  <option>Purple card</option>
          </select>

          <button>+(#2)</button>

    </div>
  );
}